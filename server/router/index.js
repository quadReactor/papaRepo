const express = require('express');

const router = express.Router();

const commentCtrl = require('../controller/comments');
const photosCtrl = require('../controller/photos.js');
const userCtrl = require('../controller/users');

// Sign up ----------------------------------------

router.get('/', () => {});
router.post('/login', () => {});
router.post('/signup', userCtrl.addUser);
router.post('/logout', () => {});

// Render Feed ----------------------------------------

router.get('/:username', photosCtrl.userFeed);
router.get('/:username/follower', userCtrl.followerFeed);
router.get('/:username/all', photosCtrl.allFeed);

// Modify Followers --------------------------------------------------

router.post('/:username/addfollower', userCtrl.addFollower); // add follower
router.put('/:username/approvefollower', userCtrl.acceptFollower); // approve follower
router.put('/:username/removefollower', userCtrl.deleteFollower); // remove follower
router.put('/:username/denyfollower', userCtrl.denyRequest); // deny follower

router.put('/:username/stoppendingfollowing', userCtrl.deletePending); // stop following before accept
router.put('/:username/stopfollowing', userCtrl.stopFollowing); // stop following

// comment ---------------------------------------------------

router.get('/:username/:photoId/comments', commentCtrl.getComments); // retrieve comments for individual photo to render
router.post('/:username/:photoId/comments', commentCtrl.postComment); // add
router.delete('/:username/:commentId/comments', commentCtrl.deleteComment); // delete
router.put('/:username/:commentId/comments', commentCtrl.editComment); // edit

// Post New Photo ---------------------------------------------

router.post('/:username/content', photosCtrl.addContent); // add new post
router.delete('/:photoId/content', photosCtrl.deleteContent); // delete post

// Likes --------------------------------------------------------

router.post('/:username/:photoId/like', photosCtrl.addLike); // add a like
router.put('/:username/:photoId/like', photosCtrl.removeLike); // remove a like

module.exports = router;
