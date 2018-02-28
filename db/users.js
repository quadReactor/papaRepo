const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true }, // from firebase
  userId: { type: String, unique: true }, // from firebase
  pendingFollowers: [{ type: String }],
  followers: [{ type: String }],
  pendingFollowing: [{ type: String }],
  following: [{ type: String }],
  profilePic: { type: String }, // url
  bio: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
