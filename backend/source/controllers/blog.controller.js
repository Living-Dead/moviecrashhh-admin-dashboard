require('../config/database.config.js');
const blogModel = require('../database/models/blog.model.js');
const dateService = require('../services/date.service.js');
const uniqueIdService = require('../services/uniqueId.service.js');
const mailerService = require('../services/mailer.service.js');

const defaultEmail = process.env.EMAIL_TO_ADDRESS;

class BlogController {
    selectById(req, res) {
        blogModel.findOne(
            { 
                questionId: req.params.id
            }, (err, data) => {
                if (err) {
                    res.json({
                        ok: false,
                        success: false,
                        message: err,
                    });
                    return;
                }

                if (data === null) {
                    res.json({
                        ok: false,
                        success: false,
                        message: 'No record found...',
                    });
                    return;
                }

                const object = [
                    {
                        sort: data.comments.sort((a, b) => b.date - a.date)
                    },
                    {
                        data: data,
                    }
                ];

                res.json({
                    object,
                    ok: true,
                    success: true,
                });
            });
    }
}


module.exports = BlogController;