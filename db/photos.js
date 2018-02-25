const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photosSchema = new Schema({
  username: { type: String },
  description: String,
  photoUrl: String,
  likes: [{ type: String }] //users
});

const Photo = mongoose.model("Photo", photosSchema);

module.exports = Photo;
