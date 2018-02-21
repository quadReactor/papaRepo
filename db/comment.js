const mongoose = require('mongoose');

const Schema = mongoose.Schema

var commentSchema = new Schema({
  user : {type: String},
  photo: {type: Number},
  text: {type: String},
//timeStamp : {typeL date, default: DateNow}
    
});

let Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;