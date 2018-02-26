const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true }, //from firebase
  userId: { type: String, unique: true }, //from firebase
  pendingFollowers: [{ type: String, unique: true }],
  followers: [{ type: String, unique: true }],
  pendingFollowing: [{ type: String, unique: true }],
  following: [{ type: String, unique: true }],
  profilePic: { type: String }, //url
  bio: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
