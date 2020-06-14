import * as express from 'express';
import *  as bodyParser from 'body-parser';
import PORT from "./config/app";
import {authRouter} from "./features/auth";
import {adminProductRouter, userProductRouter} from "./features";
import {Response, Request} from "express";
import {connect} from "./dataAccess/dataBase/connectdb";
import {userOrder} from "./features/orders";

require('dotenv').config();
connect();

const app = express();

export interface User {
    id: string,
    role: number;
}

declare global {
    namespace Express {
        interface Request {
            user: User
        }
    }
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, authorization, InfoUser');
    res.setHeader("Access-Control-Expose-Headers", "InfoUser");
    next()
});
app.use("/auth", authRouter);
app.use("/printing-edition", userProductRouter);
app.use("/admin/printing-edition", adminProductRouter);
app.use("/admin", adminProductRouter);
app.use("/order", userOrder);

app.listen(PORT.appPort, function () {
    console.log("Сервер начинает прослушивание...");
});
