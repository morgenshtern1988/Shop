import * as express from 'express';
import *  as bodyParser from 'body-parser';
import connectMongo from "./dataAccess/dataBase/connectdb";
import PORT from "./config/app";
import {authRouter} from "./features/auth"
import {adminProductRouter, userProductRouter} from "./features";
import {Request} from "express";
import {Response} from "express";
import paginate from "jw-paginate";

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

app.get('/api/items', (req: Request, res: Response) => {
    // example array of 150 items to be paged
    const items = [...Array(150).keys()].map(i => ({id: (i + 1), name: 'Item ' + (i + 1)}));

    // get page from query params or default to first page
    // const page = parseInt(req.query.page) || 1;

    // get pager object for specified page
    const pageSize = 5;
    const pager = paginate(50, 2, 5,20);
    console.log("pager", pager)
    // get page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // return pager object and current page of items
    // return res.json({pager, pageOfItems});
});

app.listen(PORT.appPort, function () {
    console.log("Сервер начинает прослушивание...");
});
