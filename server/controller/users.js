// all functions goes here
const User = require('../model/user');
const Photo = require('../model/photo');

module.exports = {
  // moved
  // Add new user signup
  addUser: (req, res) => {
    User.addUser(req, () => {
      res.send('User Added');
    });
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
      Photo.findFollowerPhoto(data, (photos) => {
        res.send(photos);
      });
    });
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
  },

  acceptFollower: (req, res) => {
    // addFollowers
    // removePendingFollowers
    // addFollowing
    // removePendingFollowing
    User.addFollowers(req, (e) => {
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
  },
  stopFollowing: (req, res) => {
    // deleteFollower
    // deleteFollowing
    User.stopFollower(req, (err) => {
      if (err) {
        throw err;
      }
      User.stopFollowing(req, (error) => {
        if (error) {
          throw error;
        }
        res.send('we deleted the follower');
      });
    });
  },
  // person being followed reject follower
  denyRequest: (req, res) => {
    // removePendingFollowers
    // removePendingFollowing
    User.removePendingFollowers(req, (err) => {
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
  },
  // person being followed reject follower
  deletePending: (req, res) => {
    // removePendingFollowers
    // removePendingFollowing
    User.stopPendingFollowing(req, (err) => {
      if (err) {
        throw err;
      }
      User.stopPendingFollowers(req, (error) => {
        if (error) {
          throw error;
        }
        res.send('Removed Pending Followering Request');
      });
    });
  },
};
