const mongoose = require('mongoose');

const Schema = mongoose.Schema

var photosSchema = new Schema({
    // photo: String,
    photoUrl: String,
    likes: [String]

});

let Photos = mongoose.model('Photos', photosSchema);

//export?
module.exports = Photos;