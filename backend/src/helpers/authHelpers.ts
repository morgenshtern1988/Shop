import * as jwt from "jsonwebtoken"
//модуль для созданий уникального ИД
const uuid = require("uuid/v4");
import { tokenModel } from "../dataAccess/entityModels/tokien";
import appJwt from "../config/app"

export const generateAccessToken = (userId: any) => {
    const payload = {
        userId,
        type: appJwt.jwt.tokens.access.type,
    };
    const option = { expiresIn: appJwt.jwt.tokens.access.expiresIn };
    //возвращает готовый token
    return jwt.sign(payload, appJwt.jwt.secret, option)
};

export const generateRefreshToken = () => {
    const payload = {
        id: uuid(),
        type: appJwt.jwt.tokens.refresh.type,
    };
    const option = { expiresIn: appJwt.jwt.tokens.refresh.expiresIn };
    return {
        id: payload.id,
        token: jwt.sign(payload, appJwt.jwt.secret, option)
    }
};

//перезапись refresh token в body
export const replaceDbRefreshToken = (tokenId: any, userId: any) =>
    tokenModel.findOneAndRemove({ userId })
        .exec()
        .then(() => tokenModel.create({ tokenId, userId }));
