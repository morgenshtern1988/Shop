"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_services_1 = require("../services/auth.services");
const jwt = require("jsonwebtoken");
const app_1 = require("../../../config/app");
const authRepositories_1 = require("../repositories/authRepositories");
exports.registerUser = async (request, response) => {
    auth_services_1.createUser(request.body)
        .then(user => response.json(user))
        .catch(err => response.json(err));
};
exports.authenticateUser = async (request, response) => {
    auth_services_1.loginUser(request.body)
        .then(token => response.json(token))
        .catch(() => response.sendStatus(401));
};
exports.tokenAccessLifeCheck = async (request, response) => {
    const { accessToken } = request.body;
    let payload;
    try {
        const resultVerify = jwt.verify(accessToken, app_1.default.jwt.secret);
        response.sendStatus(200);
    }
    catch (e) {
        response.sendStatus(401);
    }
};
exports.refreshTokens = async (request, response) => {
    const { refreshToken } = request.body;
    let payload;
    try {
        payload = jwt.verify(refreshToken, app_1.default.jwt.secret);
        let { role, id } = payload;
        const user = {
            id,
            role
        };
        const token = await authRepositories_1.updateTokens(user);
        response.json(token);
        /*
                if (payload.type !== "refresh") {
                    res.status(401).json({message: "Invalid token"});
                    return;
                }*/
    }
    catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            response.status(401).json({ message: "Token expired" });
            return;
        }
        else if (e instanceof jwt.JsonWebTokenError) {
            response.status(401).json({ message: "Invalid token!" });
            return;
        }
    }
    /* tokenModel.findOne({tokenId: payload.id})
         .then((token: any) => {
             if (token === null) {
                 throw new Error("Invalid token!");
             }
             return updateTokens((token.userId));
         })
         .then((tokens: any) => res.json(tokens))
         .catch((err: any) => res.status(401).json({message: err.message}))*/
};
//# sourceMappingURL=auth.handlers.js.map