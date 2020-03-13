"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const connectdb_1 = require("./dataAccess/dataBase/connectdb");
const user_1 = require("./dataAccess/entityModels/user");
require('dotenv').config();
connectdb_1.default();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', async (request, response) => {
    const result = await user_1.User.insertMany({
        email: 'asdas@asdasd.ru',
        password: 'asdasdasd1231231',
        role: 1,
    });
    response.send('User created');
});
app.get('/find', async (request, response) => {
    const result = await user_1.User.findOne({
        email: 'asdas@asdasd.ru',
    });
    response.json(result);
});
app.listen(3000);
//# sourceMappingURL=index.js.map