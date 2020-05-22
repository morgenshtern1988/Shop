"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v4");
const tokien_1 = require("../dataAccess/entityModels/tokien");
const app_1 = require("../config/app");
const printing_edition_1 = require("../dataAccess/entityModels/printing-edition");
exports.generateAccessToken = async (user) => {
    const payload = {
        role: user.role,
        id: user._id,
        type: app_1.default.jwt.tokens.access.type,
    };
    const option = { expiresIn: app_1.default.jwt.tokens.access.expiresIn };
    return jwt.sign(payload, app_1.default.jwt.secret, option);
};
exports.generateRefreshToken = async (user) => {
    const payload = {
        id: user._id,
        role: user.role,
        type: app_1.default.jwt.tokens.refresh.type,
    };
    const option = { expiresIn: app_1.default.jwt.tokens.refresh.expiresIn };
    return jwt.sign(payload, app_1.default.jwt.secret, option);
};
exports.replaceDbRefreshToken = (tokenId, userId) => tokien_1.tokenModel.findOneAndRemove({ userId })
    .exec()
    .then(() => tokien_1.tokenModel.create({ tokenId, userId }));
exports.paramPagination = (query) => {
    const limit = 6;
    let currentPage = +query.page || 1;
    if (currentPage < 1) {
        currentPage = 1;
    }
    const startIndex = limit * (currentPage - 1);
    return { startIndex, currentPage, limit };
};
exports.resLengthCollection = async ({ limit, param }) => {
    const res = await printing_edition_1.printingEditionModel.find(param);
    console.log("RESULT LENGTH", res.length);
    let totalPages = [];
    for (let i = 1; i <= Math.ceil(res.length / limit); i++) {
        totalPages.push(i);
    }
    return totalPages;
};
//# sourceMappingURL=authHelpers.js.map