const User = require('../../db/users');
const db = require('../../db');

module.exports = {
  addUser: (input, callback) => {
    const newUser = new User({
      username: input.body.username, // from firebase Email
      displayname: input.body.displayname, // from firebase
      profilePic: input.body.profilePic, // url
      bio: 'placeholder bio',
      pendingFollowers: [],
      followers: [],
      pendingFollowing: [],
      following: []
    });
    newUser.save(callback());
  },

  findUser: (input, callback) => {
    User.find({ username: input.params.username }).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  addPendingFollowers: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.body.username },
      { $push: { pendingFollowers: input.params.username } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  addPendingFollowing: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.params.username },
      { $push: { pendingFollowing: input.body.username } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  addFollowers: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.params.username },
      { $push: { followers: input.body.username } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  addFollowing: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.body.username },
      { $push: { following: input.params.username } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  removePendingFollowers: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.params.username },
      { $pull: { pendingFollowers: { $in: [input.body.username] } } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  removePendingFollowing: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.body.username },
      { $pull: { pendingFollowing: { $in: [input.params.username] } } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  stopPendingFollowers: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.body.username },
      { $pull: { pendingFollowers: { $in: [input.params.username] } } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  stopPendingFollowing: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.params.username },
      { $pull: { pendingFollowing: { $in: [input.body.username] } } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  deleteFollower: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.params.username },
      { $pull: { followers: { $in: [input.body.username] } } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  deleteFollowing: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.body.username },
      { $pull: { following: { $in: [input.params.username] } } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  stopFollower: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.body.username },
      { $pull: { followers: { $in: [input.params.username] } } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  stopFollowing: (input, callback) => {
    User.findOneAndUpdate(
      { username: input.params.username },
      { $pull: { following: { $in: [input.body.username] } } }
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
};
