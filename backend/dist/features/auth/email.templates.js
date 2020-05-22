"use strict";
// const {CLIENT_ORIGIN} = require('../config');
Object.defineProperty(exports, "__esModule", { value: true });
// Этот файл экспортирует объект с одной парой ключ / значение.
// Однако, поскольку это не является частью логики приложения
// имеет смысл абстрагировать его в другой файл. Плюс теперь легко
// расширяемо, если приложению нужно отправлять разные шаблоны электронной почты
// (например, отписаться) в будущем.
exports.default = {
    confirm: (id) => ({
        subject: 'React Confirm Email',
    })
};
//# sourceMappingURL=email.templates.js.map