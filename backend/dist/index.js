"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const connectdb_1 = require("./dataAccess/dataBase/connectdb");
const app_1 = require("./config/app");
// import{userRouter} from "./features/login/index";
const auth_1 = require("./features/auth");
const printing_editions_1 = require("./features/printing-editions");
const cors = require("cors");
require('dotenv').config();
// конектимся с БД
connectdb_1.default();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", auth_1.authRouter);
app.use("/admin/printing-edition", printing_editions_1.adminProductRouter);
app.listen(app_1.default.appPort, function () {
    console.log("Сервер начинает прослушивание...");
});
//# sourceMappingURL=index.js.map