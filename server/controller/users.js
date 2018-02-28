// all functions goes here
const User = require('../model/user');
const Photo = require('../model/photo');

module.exports = {
  getUser: (req, res) => {
    User.findUser(req, (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  },

  addUser: (req, res) => {
    User.addUser(req, () => {
      res.send('User Added');
    });
  },

  followerFeed: (req, res) => {
    User.findUser(req, (err, data) => {
      if (err) {
        throw err;
      }
      Photo.findFollowerPhoto(data, (photos) => {
        res.send(photos);
      });
    });
  },

  addFollower: (req, res) => {
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

  denyRequest: (req, res) => {
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

  deletePending: (req, res) => {
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
