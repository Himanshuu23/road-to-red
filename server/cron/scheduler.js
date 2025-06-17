const cron = require('node-cron');
const { syncAllStudentsData } = require('../controllers/codeforces');

let currentTask = null;

const updateCronSchedule = (time = '02:00', frequency = 'daily') => {
  if (currentTask) currentTask.stop();

  let cronTime = '0 2 * * *'; // default 2:00 AM

  if (frequency === 'daily' && time.includes(':')) {
    const [hours, minutes] = time.split(':');
    cronTime = `${parseInt(minutes)} ${parseInt(hours)} * * *`;
  }

  currentTask = cron.schedule(cronTime, () => {
    syncAllStudentsData();
  });
};

module.exports = {
  updateCronSchedule
};
