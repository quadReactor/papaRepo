const Photo = require('../../db/photos');
const db = require('../../db');

module.exports = {
  userFeed: (input, callback) => {
    Photo.find({ username: input.params.username })
      .limit(20)
      .exec((err, data) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, data);
        }
      });
  },

  findFollowerPhoto: (data, callback) => {
    const friendPhotos = [];
    for (const friend of data[0].following) {
      Photo.find({ username: friend })
        .limit(10)
        .then((data) => {
          friendPhotos = friendPhotos.concat(data);
        })
        .exec((err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, friendPhotos);
          }
        });
    }
  },

  allFeed: (callback) => {
    Photo.find()
      .limit(40)
      .sort('created')
      .exec((err, data) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, data);
        }
      });
  },

  addPhoto: (input, callback) => {
    const newPhoto = new Photo({
      username: input.params.username,
      description: input.body.description,
      photoUrl: input.body.photoUrl,
    });
    newPhoto.save().then(callback);
  },

  removePhoto: (input, callback) => {
    Photo.remove({ _id: input.body.id }).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  addLike: (input, callback) => {
    Photo.findOneAndUpdate(
      { _id: input.params.photoId },
      { $push: { likes: input.params.username } },
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  removeLike: (input, callback) => {
    // front end needs to list for update on event to rerender like count
    Photo.findOneAndUpdate(
      { _id: input.params.photoId },
      { $pull: { likes: { $in: [input.params.username] } } },
    ).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
};
