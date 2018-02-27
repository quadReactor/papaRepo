const Comment = require('../model/comment');

module.exports = {
  getComments: (req, res) => {
    Comment.getComments(req, (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  },

  postComment: (req, res) => {
    // req.body.text- comment
    // req.params.username - user
    // req.body.photo - photo reference
    Comment.addComment(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Comment Posted');
    });
  },

  deleteComment: (req, res) => {
    Comment.deleteComment(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Deleted Comment');
    });
  },

  editComment: (req, res) => {
    Comment.editComment(req, () => {
      res.send('Comment Edited');
    });
  },
};
