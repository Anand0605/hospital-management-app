const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  diagnosis: String,
  treatment: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Record', recordSchema);
