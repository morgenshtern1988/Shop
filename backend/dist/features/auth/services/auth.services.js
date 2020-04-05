"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authRepositories_1 = require("../repositories/authRepositories");
const express_1 = require("express");
exports.createUser = async (user) => {
    console.log(user);
    if (!user) {
        return "error";
    }
    else {
        if (user.password !== "undefined") {
            return await authRepositories_1.registerUser(user);
        }
        else {
            return "undefined password";
        }
    }
};
/*interface ILoginUser {
    email:string,
    password:string
}*/
exports.loginUser = async (user) => {
    try {
        if (Object.keys(user).length !== 0) {
            return await authRepositories_1.authenticateUser(user);
        }
        else {
            throw new Error("request undefined");
        }
    }
    catch (e) {
        express_1.response.sendStatus(400);
    }
};
//# sourceMappingURL=auth.services.js.map