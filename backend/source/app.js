import express from 'express';
const session = require('express-session');
const history = require('connect-history-api-fallback');
const path = require('path');
const app = express();
const port = 3011;
const routerCatalog = require('./routes/route.catalog.js');
const staticFileMiddleware = express.static(
    path.join(__dirname, app.get('env') === 'development' ? 'fe/dist' : 'public/dist'));

app.use(express.json());

/*app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.set('Access-Control-Allow-Credentials', true);
    next();
});*/

app.use(express.json({ limit: '60mb' }));

/* session */
app.set('trust proxy', 1);
app.use(session({
    name: 'moviecrashhh_session',
    secret: 'moviecrashhh',
    resave: false,
    saveUninitialized: true,
    cookie: {
        //secure: true,
        httpOnly: false,
        /* 3 hours */
        maxAge: 3 * 60 * 60 * 1000,
    }
}));

const router = routerCatalog;

app.use(router);

/* history */
app.use(history({
    htmlAcceptHeaders: ['text/html', '*/*'],
    verbose: true
}));

app.use(staticFileMiddleware);

// create 404 not found
app.use((req, res) => {
    const message = `${req.originalUrl} not found!`;
    //req.log.error(message);
    res.status(404);
    res.json({
        success: false,
        message,
    });
});

//app.use(errorHandlerMiddleware);

// start application
app.listen(port, () => console.log(`M2M app listening on port ${port}!`));