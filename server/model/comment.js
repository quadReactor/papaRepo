const Comment = require('../../db/comment');
const db = require('../../db');

module.exports = {
  getComments: (input, callback) => {
    //Comment.find({ _id: input.params.photoId }).exec((err, data) => {
    Comment.find({ photoId: input.params.photoId }).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  addComment: (input, callback) => {
    const newComment = new Comment({
      username: input.params.username, // email
      displayname: input.body.displayname,
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
