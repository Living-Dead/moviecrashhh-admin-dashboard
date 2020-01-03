const mongoose = require('mongoose');
const detailsOfStatisticSchema = require('../schemas/detailsOfStatistic.schema.js');

const detailsOfStatisticModel = mongoose.model('DetailsOfStatistic', detailsOfStatisticSchema, 'detailsOfStatistic');

module.exports = detailsOfStatisticModel;