"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
//модуль для созданий уникального ИД
const uuid = require("uuid/v4");
const tokien_1 = require("../dataAccess/entityModels/tokien");
const app_1 = require("../config/app");
exports.generateAccessToken = async (userId) => {
    const payload = {
        userId,
        type: app_1.default.jwt.tokens.access.type,
    };
    const option = { expiresIn: app_1.default.jwt.tokens.access.expiresIn };
    //return token
    return jwt.sign(payload, app_1.default.jwt.secret, option);
};
exports.generateRefreshToken = async () => {
    const payload = {
        id: uuid(),
        type: app_1.default.jwt.tokens.refresh.type,
    };
    const option = { expiresIn: app_1.default.jwt.tokens.refresh.expiresIn };
    return {
        id: payload.id,
        token: jwt.sign(payload, app_1.default.jwt.secret, option)
    };
};
//rewrite refresh token в DB
exports.replaceDbRefreshToken = (tokenId, userId) => {
    tokien_1.tokenModel.findOneAndRemove({ userId })
        .exec()
        .then(() => tokien_1.tokenModel.create({ tokenId, userId }));
};
//# sourceMappingURL=authHelpers.js.map