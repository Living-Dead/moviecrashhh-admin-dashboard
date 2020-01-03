const mailer = require('../config/mailer.config.js');
const mailerTemplate = require('../templates/mailer.template.js');

class mailerService {

    constructor() {
        this.from = process.env.EMAIL_FROM_ADDRESS;
    }

    sendMail(msgData) {
        const object = {
            title: msgData.title,
            message: msgData.message,
            mailType: msgData.mailType,
            id: msgData.questionId,
        };

        mailer.sendMail({
            from: this.from, // sender address
            to: msgData.to, // list of receivers
            subject: `Hello! Cyber Open Space ${msgData.type} ✔`, // Subject line
            html: new mailerTemplate().createTemplate(object), // html body
            date: new Date(), // date
        });
    }
}

module.exports = mailerService;