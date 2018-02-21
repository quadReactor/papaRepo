const express = require("express");
const router = require("express").Router();
const dbController = require("../controller");

//Sign up ----------------------------------------
router.get('/', () => {});

router.post("/login", () => {});

router.post("/signup", () => {});

router.post("/logout", () => {});

//Render Feed ----------------------------------------
// get calls photo collection 
router.get('/:username', () => {}); 
router.get('/:username/follower', () => {});
router.get('/:username/all', () => {});

// Modify Followers --------------------------------------------------
router.post('/:username/follower', () => {}); // add follower
router.put('/:username/follower', () => {}); // approve follower
router.delete('/:username/follower', () => {}); // remove follower

// comment ---------------------------------------------------

router.get('/:username/:photoId/comments', () => {}); //retrieve comments for individual photo to render
router.post('/:username/:photoId/comments', () => {}); // add

router.delete('/:username/:photoId/comments', () => {}); //delete

router.put('/:username/:photoId/comments', () => {}); //edit 

// Post New Photo ---------------------------------------------

router.post('/:username/content', () => {}); // add new post

router.delete('/:username/content', () => {}); // delete post

// Likes --------------------------------------------------------

router.post('/:photoId/like', () => {}); // add a like

router.delete('/:photoId/like', () => {}); // remove a like
