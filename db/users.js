const mongoose = require('mongoose');

const Schema = mongoose.Schema

var userSchema = new Schema({
    // photo: String,
    user: {type: String, unique: true},
    password:{type: String},
    photo: [String],
    followers: {type: Object},
<<<<<<< HEAD
    following: {type: Object},
    profilePic: {type: String},
    bio: {type: String},
=======
    following: [String],
    profilePic: {type: String},
    bio: {type: String},

>>>>>>> 87fcfa89cf07b1fbc2d414b6f45ae0e58bae2115
});

let User = mongoose.model('User', userSchema);

<<<<<<< HEAD

=======
//export?
>>>>>>> 87fcfa89cf07b1fbc2d414b6f45ae0e58bae2115
module.exports = User;