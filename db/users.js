const mongoose = require('mongoose');
import photo from './photos';
const Schema = mongoose.Schema

var userSchema = new Schema({
    // photo: String,
    username: {type: String, unique: true}, //from firebase
    userId:{type: String, unique:true}, //from firebase
    photo: [{type: Schema.Types.ObjectId, ref: 'photo'}], //[String],
    pendingFollowers: [{type: String, unique: true}],
    followers: [{type: String, unique: true}],
    pendingFollowing: [{type: String, unique: true}],
    following: [{type: String, unique: true}],
    profilePic: {type: String}, //url
    bio: {type: String},
});

let User = mongoose.model('User', userSchema);

//export?
module.exports = User;