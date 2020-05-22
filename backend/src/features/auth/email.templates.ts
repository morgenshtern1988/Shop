// const {CLIENT_ORIGIN} = require('../config');

// Этот файл экспортирует объект с одной парой ключ / значение.
// Однако, поскольку это не является частью логики приложения
// имеет смысл абстрагировать его в другой файл. Плюс теперь легко
// расширяемо, если приложению нужно отправлять разные шаблоны электронной почты
// (например, отписаться) в будущем.
export default {
    confirm: (id: any) => ({
        subject: 'React Confirm Email',
        /*html: `
      <a href='${CLIENT_ORIGIN}/confirm/${id}'>
        click to confirm email
      </a>
    `,*/
        // text: `Copy and paste this link: ${CLIENT_ORIGIN}/confirm/${id}`
    })

};
