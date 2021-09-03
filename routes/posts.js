const express = require("express");
const router = express.Router();

// load model
const Post = require("../models/Post");

// show all posts
router.get("/", async (_req, res) => {
  const posts = await Post.find().lean().sort({ date: -1 });
  res.render("posts/index", { posts });
});

// show form
router.get("/add", (_req, res) => {
  res.render(`posts/add`);
});

// create new post
router.post("/", async (req, res) => {
  const { title, text } = req.body;

  let errors = [];

  if (!title) errors.push({ msg: "Title required" });
  if (!text) errors.push({ msg: "Text required" });
  if (errors.length > 0) res.render("posts/add", { title, text });
  else {
    const newPostData = { title, text };
    const newPost = new Post(newPostData);
    await newPost.save();
    res.redirect("/posts");
  }
});

// display a form for users to change post
router.get("/edit/:id", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id }).lean();
  res.render(`posts/edit`, { post });
});

// update change to DB
router.put("/:id", async (req, res) => {
  const { title, text } = req.body;
  await Post.findOneAndUpdate({ _id: req.params.id }, { title, text });
  res.redirect(`/posts`);
});

// delete post
router.delete("/:id", async (req, res) => {
  await Post.findOneAndRemove({ _id: req.params.id });
  res.redirect(`/posts`);
});

module.exports = router;
