const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("..blog-dashboard/models/user");
const router = express.Router();

const SECRET = "supersecret"; // put in env variable later

// Register (for testing)
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  await newUser.save();
  res.json({ message: "User registered!" });
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;
