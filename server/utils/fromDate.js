const getFromDate = (days) => {
    const msInDays = 24 * 60 * 60 * 1000;
    return new Date(Date.now() - parseInt(days) * msInDays);
};

module.exports = { 
    getFromDate 
};