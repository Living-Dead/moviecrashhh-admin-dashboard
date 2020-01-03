const nodemailer = require('nodemailer');

const mailer = nodemailer.createTransport({
    host: process.env.EMAIL_URL,
    port: process.env.EMAIL_PORT,
});

module.exports = mailer;