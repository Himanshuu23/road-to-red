const axios = require('axios');

const fetchCFDataForHandle = async (handle) => {
  const userRes = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
  const contestRes = await axios.get(`https://codeforces.com/api/user.rating?handle=${handle}`);
  const statusRes = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`);

  const user = userRes.data.result[0];
  const contests = contestRes.data.result.map(c => ({
    contestId: c.contestId,
    contestName: c.contestName,
    rank: c.rank,
    oldRating: c.oldRating,
    newRating: c.newRating,
    ratingChange: c.newRating - c.oldRating,
    date: new Date(c.ratingUpdateTimeSeconds * 1000)
  }));

  const solvedSet = new Set();
  const problems = [];

  for (const sub of statusRes.data.result) {
    if (sub.verdict === 'OK') {
      const key = `${sub.problem.contestId}-${sub.problem.index}`;
      if (!solvedSet.has(key)) {
        solvedSet.add(key);
        problems.push({
          name: sub.problem.name,
          rating: sub.problem.rating || 0,
          tags: sub.problem.tags || [],
          solvedAt: new Date(sub.creationTimeSeconds * 1000)
        });
      }
    }
  }

  return {
    contests,
    problems,
    rating: user.rating || 0,
    maxRating: user.maxRating || 0
  };
};

module.exports = { fetchCFDataForHandle };