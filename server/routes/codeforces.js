const express = require('express');
const router = express.Router();
const {
  getContestHistory,
  getProblemStats,
  syncCodeforcesById,
  syncAllStudentsData,
  updateSyncSettings
} = require('../controllers/codeforces');

router.get('/students/:id/contests', getContestHistory);
router.get('/students/:id/problems', getProblemStats);
router.post('/sync/:id', syncCodeforcesById);
router.post('/sync', syncAllStudentsData);
router.put('/sync/settings', updateSyncSettings);

module.exports = router;