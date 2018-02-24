const express = require("express");
const router = require("express").Router();

const commentCtrl = require("../controller/comments");
const photosCtrl = require('../controller/photos.js');
const userCtrl = require('../controller/users');


// Sign up ----------------------------------------
router.get('/', () => {});
router.post("/login", () => {});
router.post("/signup", userCtrl.addUser);
router.post("/logout", () => {});

// Render Feed ----------------------------------------
// get calls photo collection 
router.get('/:username', userCtrl.userFeed); 
router.get('/:username/follower', userCtrl.followerFeed);
router.get('/:username/all', userCtrl.allFeed);

// Modify Followers --------------------------------------------------
router.post('/:username/follower', userCtrl.addFollower); // add follower
router.put('/:username/follower', userCtrl.acceptFollower); // approve follower
router.delete('/:username/follower', userCtrl.deleteFollower); // remove follower
router.delete('/:username/follower/pending', userCtrl.denyRequest); // deny follower

router.delete('/:username/following/pending', userCtrl.deletePending);// stop following before accept

// comment ---------------------------------------------------

router.get('/:username/:photoId/comments', userCtrl.getComments); //retrieve comments for individual photo to render
router.post('/:username/:photoId/comments', userCtrl.postComment); // add
router.delete('/:username/:photoId/comments', userCtrl.deleteComment); //delete
router.put('/:username/:photoId/comments', userCtrl.editComment); //edit 

// Post New Photo ---------------------------------------------

router.post('/:username/content', userCtrl.addContent); // add new post
router.delete('/:username/content', userCtrl.deleteComment); // delete post

// Likes --------------------------------------------------------

router.post('/:photoId/like', userCtrl.addLike); // add a like
router.delete('/:photoId/like', userCtrl.removeLike); // remove a like

module.exports = router;