// all functions goes here
const User = require('../model/user');
const Photo = require('../model/photo');
// const User = require("../../db/users");
// const Comment = require("../../db/comment");
// const Photo = require("../../db/photos");
// const db = require("../../db")

module.exports = {
  // moved
  // Add new user signup
  addUser: (req, res) => {
    User.addUser(req, () => res.send('User Added'));
  },

  // Render Feed

  followerFeed: (req, res) => {
    // moved
    // findUser
    // findFollowerPhoto
    User.findUser(req, (err, data) => {
      if (err) {
        throw err;
      }
      Photo.findFollowerPhoto(data, (error, photos) => {
        if (error) {
          throw error;
        }
        res.send(photos);
      });
    });
    // User.find({ username: req.params.username }).then((data) => {
    //   const friendPhotos = [];
    //   for (const friend of data[0].following) {
    //     Photo.find({ username: friend })
    //       .limit(10)
    //       .then((data) => {
    //         friendPhotos = friendPhotos.concat(data);
    //       });
    //   }
    //   // may have to be stringified
    //   res.send(friendPhotos);
    // });
  },

  // Follower
  addFollower: (req, res) => {
    // addPendingFollowers
    // addPendingFollowing
    User.addPendingFollowers(req, (err) => {
      if (err) {
        throw err;
      }
      User.addPendingFollowing(req, (error) => {
        if (error) {
          throw error;
        }
        res.send('Pending Approval');
      });
    });

    // req.body.username = person im adding
    // req.params.username = me
    // i am trying to follow "person"
    // User.findOneAndUpdate(
    //   { username: req.body.username },
    //   { $push: { pendingFollowers: req.params.username } },
    // ) // verfiy how you send up data req.body....
    //   .then((data) => {
    //     // data.pending
    //     User.findOneAndUpdate(
    //       { username: req.params.username },
    //       { $push: { pendingFollowing: req.body.username } },
    //     ).then(() => {
    //       res.send('Pending Approval');
    //     });
    //   });
  },

  acceptFollower: (req, res) => {
    // addFollowers
    // removePendingFollowers
    // addFollowing
    // removePendingFollowing
    User.addFollwers(req, (e) => {
      if (e) {
        throw e;
      }
      User.removePendingFollowers(req, (er) => {
        if (er) {
          throw er;
        }
        User.addFollowing(req, (err) => {
          if (err) {
            throw err;
          }
          User.removePendingFollowing(req, (erro) => {
            if (erro) {
              throw err;
            }
            res.send('you have finally accepted a follower');
          });
        });
      });
    });
    // User.findOneAndUpdate(
    //   { username: req.params.username },
    //   { $push: { followers: req.body.username } },
    // ) // verfiy how you send up data req.body....
    //   .then(data =>
    //     // data.pending
    //     User.findOneAndUpdate(
    //       { username: req.params.username },
    //       { $pull: { pendingfollowers: { $in: [req.body.username] } } },
    //     ), // verfiy how you send up data req.body....
    //   )
    //   // updating the guy who wants to follow
    //   .then(data =>
    //     User.findOneAndUpdate(
    //       { username: req.body.username },
    //       { $push: { following: req.params.username } },
    //     ), // verfiy how you send up data req.body....
    //   )
    //   .then(data =>
    //     User.findOneAndUpdate(
    //       { username: req.body.username },
    //       { $pull: { pendingfollowing: { $in: [req.params.username] } } },
    //     ))
    //   .then(data => res.send('you have finally accepted a follower'));
  },

  deleteFollower: (req, res) => {
    // deleteFollower
    // deleteFollowing
    User.deleteFollower(req, (err) => {
      if (err) {
        throw err;
      }
      User.deleteFollowing(req, (error) => {
        if (error) {
          throw error;
        }
        res.send('we deleted the follower');
      });
    });
    // User.findOneAndUpdate(
    //   { username: req.params.username },
    //   { $pull: { followers: { $in: [req.body.username] } } },
    // ).then(() => {
    //   User.findOneAndUpdate(
    //     { username: req.body.username },
    //     { $pull: { following: { $in: [req.params.username] } } },
    //   ).exec((err, data) => {
    //     res.send('we deleted the follower');
    //   });
    // });
  },
  // person being followed reject follower
  denyRequest: (req, res) => {
    // removePendingFollowers
    // removePendingFollowing
    User.removePendingFollower(req, (err) => {
      if (err) {
        throw err;
      }
      User.removePendingFollowing(req, (error) => {
        if (error) {
          throw error;
        }
        res.send('we Removed Pending follower');
      });
    });
    // User.findOneAndUpdate(
    //   { username: req.params.username },
    //   { $pull: { pendingFollowers: { $in: [req.body.username] } } },
    // ).then(() => {
    //   User.findOneAndUpdate(
    //     { username: req.body.username },
    //     { $pull: { pendingFollowing: { $in: [req.params.username] } } },
    //   ).exec((err, data) => {
    //     res.send('we deleted pending the follower');
    //   });
    // });
  },
  // person being followed reject follower
  deletePending: (req, res) => {
    // removePendingFollowers
    // removePendingFollowing
    User.removePendingFollowing(req, () => {
      User.removePendingFollowers(req, () => {
        res.send('Removed Pending Followering Request');
      });
    });
    // User.findOneAndUpdate(
    //   { username: req.params.username },
    //   { $pull: { pendingFollowing: { $in: [req.body.username] } } },
    // ).then(() => {
    //   User.findOneAndUpdate(
    //     { username: req.body.username },
    //     { $pull: { pendingFollowers: { $in: [req.params.username] } } },
    //   ).exec((err, data) => {
    //     res.send('removed pending followering request');
    //   });
    // });
  },
};
