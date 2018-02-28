const getUsers = require('./dummyUsers.json');
const getComments = require('./dummyComment.json');
const getPhotos = require('./dummyPhoto.json');
const User = require('./db/users');
const Photo = require('./db/photos');
const Comment = require('./db/comment');
const db = require('./db/index.js');

// to run use node insertDummyData.js in the terminal

// input Users into db
const insertAll = function () {
  User.collection.insertMany(getUsers, (err, results) => {
    if (err) {
      console.log('Error ', err);
    }
    console.log('Success with insert! ', results);
  });
};
insertAll();

// input Photos into db
const insertPhotos = function () {
  Photo.collection.insertMany(getPhotos, (err, results) => {
    if (err) {
      console.log('Error ', err);
    }
    console.log('Success with insert! ', results);
  });
};

insertPhotos();

// insert comments into Db
const insertComments = function () {
  Comment.collection.insertMany(getComments, (err, results) => {
    if (err) {
      console.log('Error ', err);
    }
    console.log('Success with insert! ', results);
  });
};

insertComments();

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
