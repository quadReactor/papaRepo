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
    console.log(data, 'data');
    console.log(data[0].following, 'Follwing list');
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
    // for (const friend of data[0].following) {
    // Photo.find({ username: { $in: [data[0].following] } }).exec((err, dat) => {
    //   console.log(dat, '!!!!!!!!!!!!!!!!!!!!');
    // });

    // .limit(10)
    // .then((dat) => {
    //   console.log(dat, '!!!!!!!!!!!!!!!!!!');
    //   // friendPhotos = friendPhotos.concat(dat);
    // });
    // }
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
