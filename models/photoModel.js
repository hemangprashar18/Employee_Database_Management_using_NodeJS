const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  photoUrl: { type: String, required: true },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Photo', photoSchema);
