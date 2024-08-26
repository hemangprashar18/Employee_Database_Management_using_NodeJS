const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String, maxLength: 500 },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
