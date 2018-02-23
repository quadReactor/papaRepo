//all functions goes here
const users = require('../../db/users');
const Comment =  require('../../db/comments');
const Photo = require ('../../db/photos');

module.exports = {
//Render Feed
  userFeed : (req, res) => {
    photos.find({username: req.params.username}).limit(20).exec((err, data) => {
      if(err){
        throw err;
      }
      res.send(data);
    })
  },

  followerFeed: (req, res) => {
    users.find({username: req.params.username})
      .select('following')
      .then((err, data)=>{
        let friendPhotos = [];
        for(let friend in data.folowing){
          photos.find({username: friend}).limit(10).then(data =>{
            friendPhotos.concat(data)
          })
        }

        if(err){
          throw err;
        }
        res.send(friendPhotos);
      })
  },

  allFeed: (req, res) => {
    photos.find().limit(20).exec((err, data) => { //sort? for newest?
      if(err){
        throw err;
      }
      res.send(data);
    })
  },
//Follower
  addFollower: (req, res) => {
    users.findOneAndUpdate({username: req.body.username},{$push: {pendingfollowing: req.params.username}}) //verfiy how you send up data req.body....
      .then((data)=>{
     //data.pending
     res.send('Pending Approval');
    })
    
  },

  acceptFollower: (req, res) => {
    users.findOneAndUpdate({username: req.params.username},{$push: {following: req.body.username}}) //verfiy how you send up data req.body....
    .then((data)=>{
   //data.pending
   users.findOneAndUpdate({username: req.body.username},{$pull: {pendingfollowing: req.params.username}}) //verfiy how you send up data req.body....
  
   res.send(' Approved');
  })
  },

  deleteFollower: (req, res) => {
    
  },
//Comment
  getComments: (req, res) => {
    comments.find({photo: req.body.photo}).exec((err,data) =>{
      if(err){
        throw err;
      } else {
        res.send(data);
      }
    })
  },

  postComment: (req, res) => {
    //req.body.text- comment
    //req.params.username - user
    //req.body.photo - photo reference
    const newComment = new comment ({
      user : req.params.username,
      photo: req.body.photo,
      text: req.body.text,
    })
    newComment.save();
  },

  deleteComment: (req, res) => {
    
  },

  editComment: (req, res) => {
    
  },
//Posting new images

  addContent: (req, res) => {
    
  },

  deleteContent: (req, res) => {
    
  },
//Likes
  addLike: (req, res) => {
    
  },

  removeLike: (req, res) => {
    
  },

};


