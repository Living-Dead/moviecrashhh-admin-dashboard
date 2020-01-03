class UserController {

    login(req, res) {

    }

    logout(req, res) {
        req.session.destroy(() => {
            res.json({
                ok: true,
                success: true,
            });
        });
    }

    account(req, res) {

    }
}

module.exports = UserController;