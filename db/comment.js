const mongoose = require('mongoose');
import Photo from './photos';
import User from './users';
const Schema = mongoose.Schema;

var commentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  user : {type: Schema.Types.ObjectId, ref: 'User'},
  photo: {type: Schema.Types.ObjectId, ref: 'Photo'},
  text: {type: String},
  date: { type: Date, default: Date.now } //timeStamp 
    
});

let Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;