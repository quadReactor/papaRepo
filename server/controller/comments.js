const Comment = require('../model/comment');

module.exports = {
  getComments: (req, res) => {
    Comment.getComments(req, (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
    // Comment.find({ photo: req.body.photo }).exec((err, data) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     res.send(data);
    //   }
    // });
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
    // const newComment = new Comment({
    //   user: req.params.username,
    //   photoId: req.params.photoId,
    //   text: req.body.text,
    // });
    // newComment.save();
    // res.send('Comment Posted');
  },

  deleteComment: (req, res) => {
    Comment.deleteComment(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Deleted Comment');
    });
    // Comment.remove({ photoId: req.params.photoId }, (err) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     res.send('deleted the comment');
    //   }
    // });
  },

  editComment: (req, res) => {
    Comment.editComment(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Comment Edited');
    });
    // Comment.findOneAndUpdate(
    //   { photoId: req.params.photoId },
    //   { $set: { text: req.body.text } },
    //   (err) => {
    //     if (err) {
    //       throw err;
    //     } else {
    //       res.send('updated the comment');
    //     }
    //   },
    // );
  },
};
