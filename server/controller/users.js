// all functions goes here
const User = require('../../db/users');
const Comment = require('../../db/comment');
const Photo = require('../../db/photos');

module.exports = {
  // Render Feed
  userFeed: (req, res) => {
    Photo.find({ username: req.params.username })
      .limit(20)
      .exec((err, data) => {
        if (err) {
          throw err;
        }
        res.send(data);
      });
  },

  followerFeed: (req, res) => {
    User.find({ username: req.params.username }).then((data) => {
      const friendPhotos = [];
      for (const friend of data[0].following) {
        Photo.find({ username: friend })
          .limit(10)
          .then((data) => {
            friendPhotos = friendPhotos.concat(data);
          });
      }
      // may have to be stringified
      res.send(friendPhotos);
    });
  },

  allFeed: (req, res) => {
    Photo.find()
      .limit(40)
      .exec((err, data) => {
        // sort? for newest?
        if (err) {
          throw err;
        }
        res.send(data);
      });
  },
  // Follower
  addFollower: (req, res) => {
    // req.body.username = person im adding
    // req.params.username = me
    // i am trying to follow "person"
    User.findOneAndUpdate(
      { username: req.body.username },
      { $push: { pendingFollowers: req.params.username } },
    ) // verfiy how you send up data req.body....
      .then((data) => {
        // data.pending
        User.findOneAndUpdate(
          { username: req.params.username },
          { $push: { pendingFollowing: req.body.username } },
        ).then(() => {
          res.send('Pending Approval');
        });
      });
  },

  acceptFollower: (req, res) => {
    // need to fix - with quad steps
    // update of me
    User.findOneAndUpdate(
      { username: req.params.username },
      { $push: { followers: req.body.username } },
    ) // verfiy how you send up data req.body....
      .then(data =>
        // data.pending
        User.findOneAndUpdate(
          { username: req.params.username },
          { $pull: { pendingfollowers: { $in: [req.body.username] } } },
        ), // verfiy how you send up data req.body....
      )
      // updating the guy who wants to follow
      .then(data =>
        User.findOneAndUpdate(
          { username: req.body.username },
          { $push: { following: req.params.username } },
        ), // verfiy how you send up data req.body....
      )
      .then(data =>
        User.findOneAndUpdate(
          { username: req.body.username },
          { $pull: { pendingfollowing: { $in: [req.params.username] } } },
        ))
      .then(data => res.send('you have finally accepted a follower'));
  },

  deleteFollower: (req, res) => {
    User.findOneAndUpdate(
      { username: req.params.username },
      { $pull: { followers: { $in: [req.body.username] } } },
    ).then(() => {
      User.findOneAndUpdate(
        { username: req.body.username },
        { $pull: { following: { $in: [req.params.username] } } },
      ).exec((err, data) => {
        res.send('we deleted the follower');
      });
    });
  },

  deletePending: (req, res) => {
    User.findOneAndUpdate(
      { username: req.params.username },
      { $pull: { pendingFollowers: { $in: [req.body.username] } } },
    ).then(() => {
      User.findOneAndUpdate(
        { username: req.body.username },
        { $pull: { pendingFollowing: { $in: [req.params.username] } } },
      ).exec((err, data) => {
        res.send('we deleted pending the follower');
      });
    });
  },

  // Comment

  getComments: (req, res) => {
    comments.find({ photo: req.body.photo }).exec((err, data) => {
      if (err) {
        throw err;
      } else {
        res.send(data);
      }
    });
  },

  postComment: (req, res) => {
    // req.body.text- comment
    // req.params.username - user
    // req.body.photo - photo reference
    const newComment = new Comment({
      user: req.params.username,
      photo: req.body.photo,
      text: req.body.text,
    });
    newComment.save();
  },

  deleteComment: (req, res) => {
    Comment.remove({ _id: req.body.id }, (err) => {
      if (err) {
        throw err;
      } else {
        res.send('deleted the comment');
      }
    });
  },

  editComment: (req, res) => {
    Comment.findOneAndUpdate({ _id: req.body.id }, { $set: { text: req.body.text } }, (err) => {
      if (err) {
        throw err;
      } else {
        res.send('updated the comment');
      }
    });
  },

  // Posting new images

  addContent: (req, res) => {
    const newPhoto = new Photo({
      user: req.body.username,
      description: req.body.descripition,
      photoUrl: req.body.photoUrl,
      likes: [],
    });
    newPhoto.save();
  },

  deleteContent: (req, res) => {
    Photo.remove({ _id: req.body.id }, (err) => {
      if (err) {
        throw err;
      } else {
        res.send('deleted the photo');
      }
    });
  },
  // Likes
  addLike: (req, res) => {
    Photo.findOneAndUpdate({ _id: req.body.photo }, { $push: { likes: req.params.username } }).exec((err, data) => {
      res.send('Liked');
      // front end needs to list for update on event to rerender like count
    });
  },

  removeLike: (req, res) => {
    Photo.findOneAndUpdate(
      { _id: req.body.photo },
      {
        $pull: { likes: { $in: [req.params.username] } },
        // front end needs to list for update on event to rerender like count
      },
    );
  },
};
