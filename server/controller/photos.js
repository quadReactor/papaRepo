const Photo = require('../model/photo');

module.exports = {
  allFeed: (req, res) => {
    // moved
    Photo.allFeed((err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
    // Photo.find()
    //   .limit(40)
    //   .exec((err, data) => {
    //     // sort? for newest?
    //     if (err) {
    //       throw err;
    //     }
    //     res.send(data);
    //   });
  },

  userFeed: (req, res) => {
    // moved
    Photo.userFeed(req, (err, data) => {
      res.send(data);
    });
    // Photo.find({ username: req.params.username })
    //   .limit(20)
    //   .exec((err, data) => {
    //     if (err) {
    //       throw err;
    //     }
    //     res.send(data);
    //   });
  },
  // Posting new images

  addContent: (req, res) => {
    // addPhoto
    Photo.addPhoto(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Photo Added');
    });
    // const newPhoto = new Photo({
    //   username: req.params.username,
    //   description: req.body.description,
    //   photoUrl: req.body.photoUrl,
    // });
    // newPhoto.save();
    // res.send('Added Photo');
  },

  deleteContent: (req, res) => {
    // removePhoto
    Photo.removePhoto(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Deleted Photo');
    });
    // Photo.remove({ _id: req.body.id }, (err) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     res.send('deleted the photo');
    //   }
    // });
  },
  // Likes
  addLike: (req, res) => {
    // addLike
    Photo.addLike(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Liked Photo');
    });
    // Photo.findOneAndUpdate(
    //   { _id: req.params.photoId },
    //   { $push: { likes: req.params.username } },
    // ).exec((err, data) => {
    //   res.send('Liked');
    //   // front end needs to list for update on event to rerender like count
    // });
  },

  removeLike: (req, res) => {
    // removeLike
    Photo.removeLike(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Removed Like');
    });
    // Photo.findOneAndUpdate(
    //   { _id: req.params.photoId },
    //   {
    //     $pull: { likes: { $in: [req.params.username] } },
    //     // front end needs to list for update on event to rerender like count
    //   },
    // ).then(() => {
    //   res.send('Removed Like');
    // });
  },
};
