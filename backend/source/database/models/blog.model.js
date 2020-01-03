const mongoose = require('mongoose');
const blogSchema = require('../schemas/blog.schema.js');

const blogModel = mongoose.model('Blog', blogSchema, 'blog');

module.exports = blogModel;