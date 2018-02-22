const mongoose = require('mongoose');

const Schema = mongoose.Schema

var commentSchema = new Schema({
  user : {type: String},
  photo: {type: Number},
  text: {type: String},
  date: { type: Date, default: Date.now } //timeStamp 
    
});

let Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;