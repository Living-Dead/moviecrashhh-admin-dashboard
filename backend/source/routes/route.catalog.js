import express from 'express';
import { authenticationMiddleware } from '../middlewares/authentication.middleware';

const router = express.Router();

// middleware
router.use((req, res, next) => authenticationMiddleware(req, res, next));

router.post(`/admin/auth`, (req, res) => {
    res.send({
        success: true,

    });
});

router.post(`/register`, (req, res) => {
    res.send({
        success: true,
    });
});

router.post(`/like`, (req, res) => {
    console.log('like req', req.body)
    console.log('req.session.passport', req.session.passport)
    res.send({
        success: true,
        token: req.session.passport,
        url: req.session.url,
    });
});

//router.post('/like', asyncMiddleware(new BlogController().insertLike));
//router.post('/logout', new UserController().logout);
//router.get('/account', new UserController().account);
//router.post('/answer', asyncMiddleware(new BlogController().insertAnswer));
//router.post('/comment', asyncMiddleware(new BlogController().insertComment));

module.exports = router;