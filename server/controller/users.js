//all functions goes here
const users = require('../../db/users');
const comments =  require('../../db/comment');
const photos = require ('../../db/photos');

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
    users.find({username: req.params.username}).select('following').then((data)=>{
     data.following
  let friendPhotos = [];
     for(let friend in data.folowing){

      photos.find({username: friend}).where({ friend :true}).then(data =>{
         friendPhotos.concat(data)
      })
     }



    }).excute((err, data)=>{})
    
    
    .exec((err, data) => {
      if(err){
        throw err;
      }
      res.send(data);
    })
  },

  allFeed: (req, res) => {
    photos.find().select('description photoUrl likes').limit(20).exec((err, data) => {
      if(err){
        throw err;
      }
      res.send(data);
    })
  },
//Follower
  addFollower: (req, res) => {
    
  },

  acceptFollower: (req, res) => {
    
  },

  deleteFollower: (req, res) => {
    
  },
//Comment
  getComments: (req, res) => {
    
  },

  postComment: (req, res) => {
    
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


