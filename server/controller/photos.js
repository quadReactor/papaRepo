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
  },

  userFeed: (req, res) => {
    // moved
    Photo.userFeed(req, (err, data) => {
      res.send(data);
    });
  },
  // Posting new images

  addContent: (req, res) => {
    // addPhoto
    Photo.addPhoto(req, () => {
      res.send('Photo Added');
    });
  },

  deleteContent: (req, res) => {
    // removePhoto
    Photo.removePhoto(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Deleted Photo');
    });
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
  },

  removeLike: (req, res) => {
    // removeLike
    Photo.removeLike(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Removed Like');
    });
  },
};
