"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const connectdb_1 = require("./dataAccess/dataBase/connectdb");
const user_1 = require("./dataAccess/entityModels/user");
const printing_edition_1 = require("./dataAccess/entityModels/printing-edition");
require('dotenv').config();
connectdb_1.default();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/', (request, response) => {
    // const result = User.insertMany({email:"Katya",role:12});
    const userData = request.body;
    // console.log(request)
    response.send(userData);
});
app.get('/', async (request, response) => {
    const result = await user_1.User.insertMany({ email: "Katya", role: 12 });
    console.log(request);
    response.send(result);
});
app.get('/printing-dition', async (request, response) => {
    const result = await printing_edition_1.PrintingEdition.insertMany({
        email: 'DDD@asdasd.ru',
    });
    response.send(result);
});
app.listen(3000);
//# sourceMappingURL=index.js.map