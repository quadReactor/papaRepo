const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  username: { type: String },
  displayname: { type: String },
  photoId: { type: String }, // grab id from photo
  text: { type: String },
  created: { type: Date, default: Date.now }, // timeStamp
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
