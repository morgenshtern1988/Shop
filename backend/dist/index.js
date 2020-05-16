"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const connectdb_1 = require("./dataAccess/dataBase/connectdb");
const app_1 = require("./config/app");
const auth_1 = require("./features/auth");
const features_1 = require("./features");
require('dotenv').config();
connectdb_1.default();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, authorization, InfoUser');
    res.setHeader("Access-Control-Expose-Headers", "InfoUser");
    next();
});
app.use("/auth", auth_1.authRouter);
app.use("/printing-edition", features_1.userProductRouter);
app.use("/admin/printing-edition", features_1.adminProductRouter);
app.use("/admin", features_1.adminProductRouter);
app.listen(app_1.default.appPort, function () {
    console.log("Сервер начинает прослушивание...");
});
//# sourceMappingURL=index.js.map