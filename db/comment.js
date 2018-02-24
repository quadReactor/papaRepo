const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: { type: String },
  photo: { type: Number }, // grap id from photo
  text: { type: String },
  date: { type: Date, default: Date.now }, // timeStamp
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
