const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    contestId: Number,
    contestName: String,
    rank: Number,
    oldRating: Number,
    newRating: Number,
    ratingChange: Number,
    problemUnsolved: Number,
    date: Date
});

module.exports = mongoose.model('Contest', contestSchema);