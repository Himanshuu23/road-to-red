const express = require("express");
const router = express.Router();
const { 
    getAllStudents,
    getStudent, 
    addStudent, 
    updateStudent, 
    deleteStudent,
    exportStudentsCSV,
    detectInactivityAndNotify
} = require('../controllers/student');

router.get('/', getAllStudents);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);
router.get('/data/csv', exportStudentsCSV);
router.get('/check/inactivity', detectInactivityAndNotify);

module.exports = router;