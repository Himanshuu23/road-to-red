const { Parser } = require('json2csv');
const Student = require('../models/Student');
const Problem = require('../models/Problem');
const { getFromDate } = require('../utils/fromDate');
const { sendReminderEmail } = require('../utils/emailUtils');

async function getAllStudents(req, res) {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ message: 'Could not fetch the students from the DB' });
    }
};

async function getStudent(req, res) {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        if (!student) res.status(404).json({ message: 'Student not found' });
        res.status(200).json(student);
    } catch (err) {
        res.status(500).json({ message: 'Could not fetch the student' });
    }
};

async function addStudent(req, res) {
    try {
        const { name, email, phone, codeforcesHandle } = req.body;
        const newStudent = await Student.create({
            name,
            email,
            phone,
            codeforcesHandle,
            currentRating: 0,
            maxRating: 0,
            lastSynced: null
        });
        res.status(200).json(newStudent);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Could not add the student' });
    }
};

async function updateStudent(req, res) {
    try {
        const { id } = req.params;
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedStudent) res.status(404).json({ message: 'Student not found' });
        res.status(200).json(updatedStudent);
    } catch (err) {
        res.status(500).json({ message: 'Could not update the student details' });
    }
};

async function deleteStudent(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Student.findByIdAndDelete(id);
        if (!deleted) res.status(404).json({ message: 'Student not found' });
        res.status(200).json(deleted);
    } catch (err) {
        res.status(500).json({ message: 'Could not delete the student details' });
    }
};

const exportStudentsCSV = async (req, res) => {
  try {
    const students = await Student.find({}, '-__v');
    const fields = ['name', 'email', 'phone', 'codeforcesHandle', 'currentRating', 'maxRating', 'lastSynced'];
    const parser = new Parser({ fields });
    const csv = parser.parse(students);

    res.header('Content-Type', 'text/csv');
    res.attachment('students.csv');
    return res.send(csv);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error generating CSV' });
  }
};

const detectInactivityAndNotify = async (req, res) => {
  try {
    const students = await Student.find({ emailOptOut: false });

    for (const student of students) {
      const recent = getFromDate(7);
      const solved = await Problem.findOne({
        studentId: student._id,
        solvedAt: { $gte: recent }
      });

      if (!solved) {
        await sendReminderEmail(student.email, student.name);
        student.reminderCount += 1;
        student.lastReminderSent = new Date();
        await student.save();
      }
    }

    res.status(200).json({ message: 'Inactivity check complete.' });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Could not detect inactivity of the user' });
  }
};

module.exports = {
    getAllStudents,
    getStudent,
    addStudent,
    updateStudent,
    deleteStudent,
    exportStudentsCSV,
    detectInactivityAndNotify
};