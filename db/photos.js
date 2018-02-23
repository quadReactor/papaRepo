const mongoose = require('mongoose');
import Comment from './comment';
import User from './users';
import Photo from './photos'

const Schema = mongoose.Schema

var photosSchema = new Schema({
    _id: Schema.Types.ObjectId,
    users: {type: Schema.Types.ObjectId, ref: 'User'},
    description: String,
    photoUrl: String,
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Photo'}],

});

let Photo = mongoose.model('Photo', photosSchema);

//export?
module.exports = Photos;