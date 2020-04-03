import * as express from 'express';
import *  as bodyParser from 'body-parser';
import connectMongo from "./dataAccess/dataBase/connectdb";
import PORT from "./config/app";
// import{userRouter} from "./features/login/index";
import { authRouter } from "./features/auth/index"
import { adminProductRouter } from "./features/printing-editions/index";
import * as cors from "cors"

require('dotenv').config();
// конектимся с БД
connectMongo();

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/admin/printing-edition", adminProductRouter);


app.listen(PORT.appPort, function () {
    console.log("Сервер начинает прослушивание...");
});
