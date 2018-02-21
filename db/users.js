const mongoose = require('mongoose');

const Schema = mongoose.Schema

var userSchema = new Schema({
    // photo: String,
    user: {type: String, unique: true},
    password:{type: String},
    photo: [String],
    followers: {type: Object},
    following: [String],
    profilePic: {type: String},
    bio: {type: String},

});

let User = mongoose.model('User', userSchema);

//export?
module.exports = User;