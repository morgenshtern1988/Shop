import * as express from 'express';
import *  as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import connectMongo from "./dataAccess/dataBase/connectdb";
import { PrintingEditionSchema } from "./dataAccess/entityModels/printing-edition";

const { appPort } = require("./config/app")
const auth = require("./services/auth/auth.user")
const authMiddleware = require("./middleware/auth")
require('dotenv').config();
// конектимся с БД
connectMongo();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const jsonParser = express.json();

app.get("/printing-edition", authMiddleware, async function (request, response) {
    PrintingEditionSchema.find({}).then((printingEdition) => response.send(printingEdition))
}
);

app.post("/printing-edition", authMiddleware, async (request, response): Promise<any> => {
    if (!request.body) return response.sendStatus(400);
    const printingEdition = request.body;
    await PrintingEditionSchema.insertMany(printingEdition, function (err: any, result: any) {
        response.send(printingEdition);
    });
}
);

app.post("/auth/register", jsonParser, auth.registerUser);
app.post("/auth/login", jsonParser, auth.authorizationUser);
app.post("/refresh-tokens", auth.refreshTokens);

app.listen(appPort, function () {
    console.log("Сервер начинает прослушивание...");
});
