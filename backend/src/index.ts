import * as express from 'express';
import *  as bodyParser from 'body-parser';
import connectMongo from "./dataAccess/dataBase/connectdb";
import PORT from "./config/app";
// import{userRouter} from "./features/login/index";
import {authRouter} from "./features/auth"
import {adminProductRouter} from "./features/printing-editions";

require('dotenv').config();

connectMongo();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
});

app.use("/auth", authRouter);
// app.use("/home");
app.use("/admin/printing-edition", adminProductRouter);


app.listen(PORT.appPort, function () {
    console.log("Сервер начинает прослушивание...");
});
