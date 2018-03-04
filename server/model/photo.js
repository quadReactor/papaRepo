const Photo = require('../../db/photos');
const Comment = require('../../db/comment');
const db = require('../../db');

module.exports = {
  userFeed: (input, callback) => {
    return Photo
      .find({ username: input.params.username })
      .sort({ created: -1 })
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
      return Photo
        .find({ username: user })
        .sort({ created: -1 })
        .limit(20);
    }

    async function processArray(array) {
      for (const person of array) {
        const per = await getPhoto(person);
        friendPhotos = friendPhotos.concat(per);
      }
      const sortedFriends = friendPhotos
        .sort((a, b) =>
          b.created - a.created);

      callback(sortedFriends);
    }
    processArray(arr);
  },

  allFeed: (callback) => {
    Photo
      .find()
      .sort({ created: -1 })
      .limit(40)
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
      username: input.params.username, // email
      displayname: input.body.displayname,
      description: input.body.description,
      photoUrl: input.body.photoUrl,
      likes: [],
    });
    newPhoto.save(callback());
  },

  removePhoto: (input, callback) => {
    Comment.remove({ photoId: input.params.photoId }).exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        Photo.remove({ _id: input.params.photoId }).exec((err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
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
