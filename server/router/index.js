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
// get calls photo collection
router.get('/:username', photosCtrl.userFeed);
router.get('/:username/follower', userCtrl.followerFeed);
router.get('/:username/all', photosCtrl.allFeed);

// Modify Followers --------------------------------------------------
router.post('/:username/follower', userCtrl.addFollower); // add follower
router.put('/:username/follower', userCtrl.acceptFollower); // approve follower
router.put('/:username/follower', userCtrl.deleteFollower); // remove follower
router.put('/:username/follower/pending', userCtrl.denyRequest); // deny follower

router.put('/:username/following/pending', userCtrl.deletePending); // stop following before accept

// comment ---------------------------------------------------

router.get('/:username/:photoId/comments', commentCtrl.getComments); // retrieve comments for individual photo to render
router.post('/:username/:photoId/comments', commentCtrl.postComment); // add
router.delete('/:username/:photoId/comments', commentCtrl.deleteComment); // delete
router.put('/:username/:photoId/comments', commentCtrl.editComment); // edit

// Post New Photo ---------------------------------------------

router.post('/:username/content', photosCtrl.addContent); // add new post
router.delete('/:username/content', photosCtrl.deleteComment); // delete post

// Likes --------------------------------------------------------

router.post('/:photoId/like', photosCtrl.addLike); // add a like
router.delete('/:photoId/like', photosCtrl.removeLike); // remove a like

module.exports = router;
