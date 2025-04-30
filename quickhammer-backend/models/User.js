const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isApproved: { type: Boolean, default: false },  // Whether the user is approved
  isBanned: { type: Boolean, default: false },  // Whether the user is banned
  isVerified: { type: Boolean, default: false },  // Whether the user is verified
  isAdmin: { type: Boolean, default: false },  // Whether the user is an admin
});

const User = mongoose.model('User', userSchema);
module.exports = User;
