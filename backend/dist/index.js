"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const connectdb_1 = require("./dataAccess/dataBase/connectdb");
const app_1 = require("./config/app");
// import{userRouter} from "./features/login/index";
const index_1 = require("./features/auth/index");
const index_2 = require("./features/printing-editions/index");
const cors = require("cors");
require('dotenv').config();
// конектимся с БД
connectdb_1.default();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", index_1.authRouter);
app.use("/admin/printing-edition", index_2.adminProductRouter);
app.listen(app_1.default.appPort, function () {
    console.log("Сервер начинает прослушивание...");
});
//# sourceMappingURL=index.js.map