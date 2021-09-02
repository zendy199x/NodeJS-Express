const express = require("express");
const router = express.Router();

// load model
const Post = require("../models/Post");

// test
router.get("/", (req, res) => {
  res.send(`This is post router`);
});

module.exports = router;
