const mongoose = require('mongoose');

const Schema = mongoose.Schema

var CommentSchema = new Schema({
  user : String,
  photo: String,
  text: String,
//timeStamp : {typeL date, default: DateNow}
    
});

let Comment = mongoose.model('Comment', CommentSchema)

//export?
