import * as express from 'express';
import *  as bodyParser from 'body-parser';
import connectMongo from "./dataAccess/dataBase/connectdb";
import PORT from "./config/app";
import {authRouter} from "./features/auth"
import {adminProductRouter, userProductRouter} from "./features";
import {Response, Request} from "express";

require('dotenv').config();
connectMongo();
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





///////////////////////////////////////
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items:any) => {
    // Заменим эту константу подсчетом суммы заказа
    // Рассчитать сумму заказа на сервере, чтобы предотвратить
    // люди напрямую манипулируют суммой на клиенте
    return 140;
};
app.post("/create-payment-intent", async (req:Request, res:Response) => {
    const { items, currency } = req.body;
    // Создать PaymentIntent с суммой заказа и валютой
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: currency
    });

    // Отправьте публикуемый ключ и детали PaymentIntent клиенту
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        clientSecret: paymentIntent.client_secret
    });
});
///////////////////////////////////







app.listen(PORT.appPort, function () {
    console.log("Сервер начинает прослушивание...");
});
