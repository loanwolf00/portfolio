const express = require("express");
const Post = require("..blog-dashboard/models/post");
const router = express.Router();

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ date: -1 });
  res.json(posts);
});

// Create post
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });
  await newPost.save();
  res.json(newPost);
});

module.exports = router;
