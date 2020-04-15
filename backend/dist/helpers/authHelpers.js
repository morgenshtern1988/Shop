"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
//модуль для созданий уникального ИД
const uuid = require("uuid/v4");
const tokien_1 = require("../dataAccess/entityModels/tokien");
const app_1 = require("../config/app");
exports.generateAccessToken = async (user) => {
    const payload = {
        role: user.role,
        id: user._id,
        type: app_1.default.jwt.tokens.access.type,
    };
    // const option = {expiresIn: appJwt.jwt.tokens.access.expiresIn};
    const option = { expiresIn: 60 };
    return jwt.sign(payload, app_1.default.jwt.secret, option);
};
exports.generateRefreshToken = async (user) => {
    const payload = {
        id: user._id,
        role: user.role,
        type: app_1.default.jwt.tokens.refresh.type,
    };
    const option = { expiresIn: new Date().getTime() + 60 };
    // const option = {expiresIn: appJwt.jwt.tokens.refresh.expiresIn};
    return jwt.sign(payload, app_1.default.jwt.secret, option);
};
//rewrite refresh token in DB
exports.replaceDbRefreshToken = (tokenId, userId) => tokien_1.tokenModel.findOneAndRemove({ userId })
    .exec()
    .then(() => tokien_1.tokenModel.create({ tokenId, userId }));
//# sourceMappingURL=authHelpers.js.map