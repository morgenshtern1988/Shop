import * as jwt from "jsonwebtoken"
//модуль для созданий уникального ИД
const uuid = require("uuid/v4");
import {tokenModel} from "../dataAccess/entityModels/tokien";
import appJwt from "../config/app"

export const generateAccessToken = (userId: any) => {
    const payload = {
        userId,
        type: appJwt.jwt.tokens.access.type,
    };
    const option = {expiresIn: appJwt.jwt.tokens.access.expiresIn};
    //return token
    return jwt.sign(payload, appJwt.jwt.secret, option)
};

export const generateRefreshToken = () => {
    const payload = {
        id: uuid(),
        type: appJwt.jwt.tokens.refresh.type,
    };
    const option = {expiresIn: appJwt.jwt.tokens.refresh.expiresIn};
    return {
        id: payload.id,
        token: jwt.sign(payload, appJwt.jwt.secret, option)
    }
};

//rewrite refresh token в DB
export const replaceDbRefreshToken = (tokenId: string, userId: string) =>
    tokenModel.findOneAndRemove({userId})
        .exec()
        .then(() => tokenModel.create({tokenId, userId}));
