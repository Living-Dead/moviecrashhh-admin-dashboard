var mongoose = require('mongoose');

module.exports = mongoose.Schema({
    questionId: String,
    title: { type: String, required: true },
    message: { type: String, required: true },
    date: String,
    dateFormat: String,
    hash: String,
    comments: Array,
    likes: Array,
    bg: String,
});