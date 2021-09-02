const express = require("express");
const router = express.Router();

// load model
const Post = require("../models/Post");

// show form
router.get("/add", (req, res) => {
  res.render(`posts/add`);
});

module.exports = router;
