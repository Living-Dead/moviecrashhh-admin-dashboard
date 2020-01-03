const express = require('express');
const router = express.Router();

/* controllers */
const ListController = require('../controllers/listing.controller.js');
const BlogController = require('../controllers/blog.controller.js');
const UserController = require('../controllers/user.controller.js');

/* backend routing */
router.get('/list', new ListController().all);
router.get('/listSorting/:id', new ListController().sorting);
router.post('/login', new UserController().login);
router.post('/logout', new UserController().logout);
router.get('/account', new UserController().account);


module.exports = router;