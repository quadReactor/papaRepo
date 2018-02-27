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
    let friendPhotos = [];
    const arr = data[0].following;

    function getPhoto(user) {
      return Photo.find({ username: user });
    }

    async function processArray(array) {
      for (const person of array) {
        const per = await getPhoto(person);
        friendPhotos = friendPhotos.concat(per);
      }

      callback(friendPhotos);
    }
    processArray(arr);
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
      likes: [],
    });
    newPhoto.save(callback());
  },

  removePhoto: (input, callback) => {
    Photo.remove({ _id: input.params.photoId }).exec((err, data) => {
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
