import * as express from 'express';
import *  as bodyParser from 'body-parser';
// import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';
import connectMongo from "./dataAccess/dataBase/connectdb";
// import {UserSchema} from './dataAccess/entityModels/user';
import {PrintingEditionSchema} from "./dataAccess/entityModels/printing-edition";
import {registerUser, authorizationUser} from "./services/userServices";

require('dotenv').config();
//конектимся с БД
connectMongo();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const jsonParser = express.json();

app.get("/printing-edition", async function (request, response) {
        PrintingEditionSchema.find({}).then((printingEdition) => response.send(printingEdition))
    }
);

app.post("/printing-edition", jsonParser, async (request, response): Promise<any> => {
        if (!request.body) return response.sendStatus(400);
        const printingEdition = request.body;
        await PrintingEditionSchema.insertMany(printingEdition, function (err: any, result: any) {
            response.send(printingEdition);
        });
    }
);

app.post("/auth/register", jsonParser, registerUser);
app.post("/auth/login", jsonParser, authorizationUser);


app.listen(3000, function () {
    console.log("Сервер начинает прослушивание...");
});
