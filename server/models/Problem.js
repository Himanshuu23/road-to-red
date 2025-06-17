const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    problemId: String,
    name: String,
    rating: Number,
    tags: [String],
    solvedAt: Date
})

module.exports = mongoose.model('Problem', problemSchema);