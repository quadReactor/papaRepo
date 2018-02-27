const Photo = require('../model/photo');

module.exports = {
  allFeed: (req, res) => {
    Photo.allFeed((err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  },

  userFeed: (req, res) => {
    Photo.userFeed(req, (err, data) => {
      res.send(data);
    });
  },

  addContent: (req, res) => {
    Photo.addPhoto(req, () => {
      res.send('Photo Added');
    });
  },

  deleteContent: (req, res) => {
    Photo.removePhoto(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Deleted Photo');
    });
  },

  addLike: (req, res) => {
    Photo.addLike(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Liked Photo');
    });
  },

  removeLike: (req, res) => {
    Photo.removeLike(req, (err) => {
      if (err) {
        throw err;
      }
      res.send('Removed Like');
    });
  },
};
