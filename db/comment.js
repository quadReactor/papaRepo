const mongoose = require('mongoose');
import photo from './photos';

const Schema = mongoose.Schema

var commentSchema = new Schema({
  user : {type: String},
  photo: [{type: Schema.Types.ObjectId, ref: 'photo'}],//{type: Number},
  text: {type: String},
  date: { type: Date, default: Date.now } //timeStamp 
    
});

let Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;