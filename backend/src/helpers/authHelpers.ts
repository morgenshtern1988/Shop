const { tokens, secret } = require("../config/app").jwt;
const jwt = require("jsonwebtoken");
//модуль для созданий уникального ИД
const uuid = require("uuid/v4");
// import * as mongoose from 'mongoose';
const mongoose = require("mongoose")
// const Token = mongoose.model("Token");
import { tokenModel } from "../dataAccess/entityModels/tokien"

const generateAccessToken = (userId: any) => {
    const payload = {
        userId,
        type: tokens.access.type,
    };
    const option = { expiresIn: tokens.access.expiresIn };
    //возвращает готовый token
    return jwt.sign(payload, secret, option)
};

const generateRefreshToken = () => {
    const payload = {
        //id token
        id: uuid(),
        type: tokens.refresh.type,
    };
    const option = { expiresIn: tokens.refresh.expiresIn };
    return {
        id: payload.id,
        token: jwt.sign(payload, secret, option)
    }
};

//перезапись refresh token в body
const replaceDbRefreshToken = (tokenId: any, userId: any) =>
    tokenModel.findOneAndRemove({ userId })
        .exec()
        .then(() => tokenModel.create({ tokenId, userId }));

module.exports = {
    replaceDbRefreshToken,
    generateRefreshToken,
    generateAccessToken
};
