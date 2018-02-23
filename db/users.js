const mongoose = require('mongoose');
import Photo from './photos';
import User from "./users"
const Schema = mongoose.Schema

var userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: {type: String, unique: true}, //from firebase
    userId:{type: String, unique:true}, //from firebase
    photo: [{type: Schema.Types.ObjectId, ref: 'Photo'}], //[String],
    pendingFollowers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    followers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    pendingFollowing: [{type: Schema.Types.ObjectId, ref: 'User'}],
    following: [{type: Schema.Types.ObjectId, ref: 'User'}],
    profilePic: {type: String}, //url
    bio: {type: String},
});

let User = mongoose.model('User', userSchema);

module.exports = User;