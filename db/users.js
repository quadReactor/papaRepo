const mongoose = require('mongoose');

const Schema = mongoose.Schema

var userSchema = new Schema({
    // photo: String,
    username: {type: String, unique: true}, //from firebase
    userId:{type: String, unique:true}, //from firebase
    photo: [String],
    followers: Schema.Types.Mixed,
    following: Schema.Types.Mixed,
    profilePic: {type: String},
    bio: {type: String},
});

let User = mongoose.model('User', userSchema);

//export?
module.exports = User;