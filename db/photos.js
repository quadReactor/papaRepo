import mongoose from 'mongoose'
const Schema = mongoose.Schema

const photosSchema = new Schema({
    users: {type: String},
    description: String,
    photoUrl: String,
    likes: [{type: String}], //users
});

const Photo = mongoose.model('Photo', photosSchema);

export default Photo;