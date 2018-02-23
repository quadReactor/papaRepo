const mongoose = require('mongoose');
import comment from './comment';

const Schema = mongoose.Schema

var photosSchema = new Schema({
    // photo: String,
    users: [String],
    description: String,
    photoUrl: String,
    likes: [String],
    comments: [{type: Schema.Types.ObjectId, ref: 'comment'}],

});

let Photos = mongoose.model('Photos', photosSchema);

//export?
module.exports = Photos;