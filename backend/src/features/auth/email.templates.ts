// const {CLIENT_ORIGIN} = require('../config');
// Этот файл экспортирует объект с одной парой ключ / значение.
// Однако, поскольку это не является частью логики приложения
// имеет смысл абстрагировать его в другой файл. Плюс теперь легко
// расширяемо, если приложению нужно отправлять разные шаблоны электронной почты
// (например, отписаться) в будущем.
import PORT from "../../config/app"

export default {
    confirm: (id: any) => ({
        subject: 'Printing-Editing',
        html: `
         <a style="font-size: 25px; color:#1edb56; background-color: #1b0606; padding: 7px" href="http://localhost:3000/auth/register/done/?id=${id}">
           Click to confirm email
         </a>
       `,
    })
};

