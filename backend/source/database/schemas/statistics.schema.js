var mongoose = require('mongoose');

module.exports = mongoose.Schema({
    hash: String,
    date: Date,
    sessionDate: Date,
});