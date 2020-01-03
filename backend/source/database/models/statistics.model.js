const mongoose = require('mongoose');
const statisticsSchema = require('../schemas/statistics.schema.js');

const statisticsModel = mongoose.model('Statistics', statisticsSchema, 'statistics');

module.exports = statisticsModel;