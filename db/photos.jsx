const mongoose = require('mongoose');

const Schema = mongoose.Schema

var PhotosSchema = new Schema({
    photo: String,
    photoUrl: String,
    Likes: Array

});

let Photos = mongoose.model('Photos', PhotosSchema)

//export?
