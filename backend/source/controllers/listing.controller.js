const blogModel = require('../database/models/blog.model.js');

class ListController {

    all(req, res) {
        blogModel.find({}).sort('-date').exec((err, data) => {
            if (err) {
                res.json({
                    ok: false,
                    success: false,
                    message: err,
                })
                return
            }

            if (data.length === 0) {
                res.json({
                    ok: false,
                    success: false,
                    message: 'No record found...',
                })
                return
            }

            res.json({
                ok: true,
                success: true,
                listing: data,
            });
        })
    };
    sorting(req, res) {
        let queryParam = {};
        queryParam = req.params.id === 'comment' ? { 'comments.date': -1 } : { 'comments.answers.date': -1 };
        blogModel.find({}).sort(queryParam).exec((err, data) => {
            if (err) {
                res.json({
                    ok: false,
                    success: false,
                    message: err,
                })
                return
            }

            res.json({
                ok: true,
                success: true,
                listing: data,
            });
        })
    }
}

module.exports = ListController;