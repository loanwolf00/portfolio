const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String // (later: hash this with bcrypt)
});

module.exports = mongoose.model("User", userSchema);
