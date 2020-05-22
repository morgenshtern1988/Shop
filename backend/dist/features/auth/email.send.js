"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require('nodemailer');
// Учетные данные для учетной записи электронной почты, с которой вы хотите отправлять почту
const credentials = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        // These environment variables will be pulled from the .env file
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
};
// Получение Nodemailer всех настроек с учетными данными, когда 'sendEmail ()'
// функция вызывается.
const transporter = nodemailer.createTransport(credentials);
// экспорт функции 'async' позволяет использовать 'await'
// как возвращаемое значение этой функции.
exports.default = async (to, content) => {
    // Адрес отправителя и адрес электронной почты, которая должна быть отправлена.
    const contacts = {
        from: process.env.MAIL_USER,
        to
    };
    // Объединяем контент и контакты в один объект, который может
    // быть переданным Nodemailer.
    const email = Object.assign({}, content, contacts);
    // Этот файл импортируется в контроллер как «sendEmail». Потому что
    // 'transporter.sendMail ()' ниже возвращает обещание, что мы можем написать такой код
    // в контроллере, когда мы используем функцию sendEmail ().
    //
    //  sendEmail()
    //   .then(() => doSomethingElse())
    //
    // Если вы сталкиваетесь с ошибками при работе Nodemailer, оберните следующее
    // строка в try / catch. Скорее всего, неправильно загружает учетные данные в
    // файл .env или не удается разрешить небезопасные приложения в настройках Gmail.
    await transporter.sendMail(email);
};
//# sourceMappingURL=email.send.js.map