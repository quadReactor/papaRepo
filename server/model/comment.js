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

  addComment: (input, callback) => {
    const newComment = new Comment({
      user: input.params.username,
      photoId: input.params.photoId,
      text: input.body.text,
    });
    newComment.save(callback());
  },

  deleteComment: (input, callback) => {
    Comment.remove({ _id: input.params.commentId }).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  editComment: (input, callback) => {
    Comment.findOneAndUpdate(
      { _id: input.params.commentId },
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
