const Student = require('../models/Student');
const Contest = require('../models/Contest');
const Problem = require('../models/Problem');
const mongoose = require('mongoose');
const { getFromDate } = require('../utils/fromDate'); 
const { fetchCFDataForHandle } = require('../utils/codeforcesUtils');
const { updateCronSchedule } = require('../cron/scheduler');

const getContestHistory = async (req, res) => {
    try {
        const { id } = req.params;
        const { range } = req.query;
        const fromDate = getFromDate(range);
        const contests = await Contest.find({
            studentId: mongoose.Types.ObjectId(id),
            date: { $gte: fromDate }
        }).sort({ date: -1 });

        res.status(200).json(contests);
    } catch (err) {
        res.status(500).json({ message: "Could not getch contest history" });
    }
};

const getProblemStats = async (req, res) => {
    try {
        const { id } = req.params;
        const { range } = req.query;
        const fromDate = getFromDate(range);
        const problems = await Problem.find({
            studentId: mongoose.Types.ObjectId(id),
            solvedAt: { $gte: fromDate }
        });

        res.status(500).json(problems);
    } catch (err) {
        res.status(500).json({ message: 'Could not fetch problem stats' });
    }
};

const syncCodeforcesById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const { contests, problems, rating, maxRating } = await fetchCFDataForHandle(student.codeforcesHandle);

    await Contest.deleteMany({ studentId: id });
    await Problem.deleteMany({ studentId: id });
    await Contest.insertMany(contests.map(c => ({ ...c, studentId: id })));
    await Problem.insertMany(problems.map(p => ({ ...p, studentId: id })));

    student.currentRating = rating;
    student.maxRating = maxRating;
    student.lastSynced = new Date();
    await student.save();

    res.status(200).json({ message: `Synced Codeforces data for ${id}` });
  } catch (err) {
    res.status(500).json({ message: 'Could not sync codeforces' });
  }
};

const syncAllStudentsData = async (req, res) => {
  try {
    const students = await Student.find();
    for (const student of students) {
      const { contests, problems, rating, maxRating } = await fetchCFDataForHandle(student.codeforcesHandle);

      await Contest.deleteMany({ studentId: student._id });
      await Problem.deleteMany({ studentId: student._id });
      await Contest.insertMany(contests.map(c => ({ ...c, studentId: student._id })));
      await Problem.insertMany(problems.map(p => ({ ...p, studentId: student._id })));

      student.currentRating = rating;
      student.maxRating = maxRating;
      student.lastSynced = new Date();
      await student.save();
    }

    res.status(200).json({ message: 'Synced all students' });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Could not sync all student data' });
  }
};

const updateSyncSettings = async (req, res) => {
  try {
    const { time, frequency } = req.body;
    updateCronSchedule(time, frequency);
    res.status(200).json({ message: `Updated cron to run at ${time}, frequency: ${frequency}` });
  } catch (err) {
    res.status(500).json({ message: 'Could not update sync settings' });
  }
};

module.exports = {
  getContestHistory,
  getProblemStats,
  syncCodeforcesById,
  syncAllStudentsData,
  updateSyncSettings
};
