const Comment = require('../../db/comment');
const db = require('../../db');

module.exports = {
  getComments: (input, callback) => {
    Comment.find({ photo: input.body.photo }).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  addComment: (input) => {
    const newComment = new Comment({
      user: input.params.username,
      photoId: input.params.photoId,
      text: input.body.text,
    });
    newComment.save();
  },

  deleteComment: (input, callback) => {
    Comment.remove({ photoId: input.params.photoId }).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  editComment: (input, callback) => {
    Comment.findOneAndUpdate(
      { photoId: input.params.photoId },
      { $set: { text: input.body.text } },
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
};
