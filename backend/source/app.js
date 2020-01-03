const express = require('express');
const session = require('express-session');
const history = require('connect-history-api-fallback');
const path = require('path');
const app = express();
const port = 3000;
const catalogRouter = require('./routes/route.catalog.js');
const staticFileMiddleware = express.static(path.join(__dirname, app.get('env') === 'development' ? 'fe/dist' : 'public/dist'));


app.use(function(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.set('Access-Control-Allow-Credentials', true);
    next();
});

/*
app.use(function(req, res, next) {
    const username = req.ntlm.UserName;
    new PageViewService().insertPageView(username)
        .catch(err => {
            console.trace(`Some error happened: ${err}`);
        });
    next();
});
*/

app.use(staticFileMiddleware);

/* history */
app.use(history({
    disableDotRule: true,
    verbose: true
}));

/* session */
app.use(session({
    name: 'yggdrasil_session',
    secret: 'yggdrasil',
    resave: false,
    saveUnitialized: true,
    cookie: {
        httpOnly: false,
        /* 3 hours */
        maxAge: 3 * 60 * 60 * 1000,
    }
}));

app.use(staticFileMiddleware);

app.options('*', function(req, res) {
    res.send('OK');
});

app.use(express.json());
app.use(catalogRouter);

app.use((err, req, res, next) => {
    res.status(400);
    res.json({
        ok: false,
        success: false,
        message: `Internal Server Error: ${err}`
    });
    next();
});

app.listen(port, () => console.log(`Yggdrasil listening on port ${port}!`));