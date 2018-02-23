const express = require("express");
const router = require("express").Router();

const commentCtrl = require("../controller/comments")
const photosCtrl = require('../controller/photos.js')
const userCtrl = require('../controller/users')


//Sign up ----------------------------------------
router.get('/', () => {});

router.post("/login", () => {});

router.post("/signup", () => {});

router.post("/logout", () => {});

//Render Feed ----------------------------------------
// get calls photo collection 
router.get('/:username', (req, res) => {
  res.send("hi")
}); 
router.get('/:username/follower', (req, res) => {
  // req.params.username gives us username
  console.log(req.params.username)
  res.send("what up homie")
});
router.get('/:username/all', () => {});

// Modify Followers --------------------------------------------------
router.post('/:username/follower', () => {}); // add follower
router.put('/:username/follower', () => {}); // approve follower
router.delete('/:username/follower', () => {}); // remove follower

// comment ---------------------------------------------------

router.get('/:username/:photoId/comments', (req, res) => {
  //params now has two things in the object, username and photoID
  console.log(req.params.photoId)
  res.send("hiiii")

}); //retrieve comments for individual photo to render
router.post('/:username/:photoId/comments', () => {}); // add

router.delete('/:username/:photoId/comments', () => {}); //delete

router.put('/:username/:photoId/comments', () => {}); //edit 

// Post New Photo ---------------------------------------------

router.post('/:username/content', () => {}); // add new post

router.delete('/:username/content', () => {}); // delete post

// Likes --------------------------------------------------------

router.post('/:photoId/like', () => {}); // add a like

router.delete('/:photoId/like', () => {}); // remove a like

module.exports = router;