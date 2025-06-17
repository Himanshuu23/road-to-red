const mongoose = require('mongoose');

const emailLogSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  sentAt: Date,
  message: String
});

module.exports = mongoose.model('EmailLog', emailLogSchema);