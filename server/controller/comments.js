const Comment = require('../model/comment');

module.exports = {
  getComments: (req, res) => {
    Comment.find({ photo: req.body.photo }).exec((err, data) => {
      if (err) {
        throw err;
      } else {
        res.send(data);
      }
    });
  },

  postComment: (req, res) => {
    // req.body.text- comment
    // req.params.username - user
    // req.body.photo - photo reference
    const newComment = new Comment({
      user: req.params.username,
      photoId: req.params.photoId,
      text: req.body.text,
    });
    newComment.save();
    res.send('Comment Posted');
  },

  deleteComment: (req, res) => {
    Comment.remove({ photoId: req.params.photoId }, (err) => {
      if (err) {
        throw err;
      } else {
        res.send('deleted the comment');
      }
    });
  },

  editComment: (req, res) => {
    Comment.findOneAndUpdate(
      { photoId: req.params.photoId },
      { $set: { text: req.body.text } },
      (err) => {
        if (err) {
          throw err;
        } else {
          res.send('updated the comment');
        }
      },
    );
  },
};
