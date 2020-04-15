import * as jwt from "jsonwebtoken"
//модуль для созданий уникального ИД
const uuid = require("uuid/v4");
import {tokenModel} from "../dataAccess/entityModels/tokien";
import appJwt from "../config/app"
import {IUser} from "../types/interface/user";

export const generateAccessToken = async (user: any) => {
    const payload = {
        role: user.role,
        id: user._id,
        type: appJwt.jwt.tokens.access.type,
    };
    // const option = {expiresIn: appJwt.jwt.tokens.access.expiresIn};
    const option = {expiresIn: 60};
    return jwt.sign(payload, appJwt.jwt.secret, option)
};

export const generateRefreshToken = async (user: any) => {
    const payload = {
        id: user._id,
        role: user.role,
        type: appJwt.jwt.tokens.refresh.type,
    };
    const option = {expiresIn: new Date().getTime() + 60};
    // const option = {expiresIn: appJwt.jwt.tokens.refresh.expiresIn};
    return jwt.sign(payload, appJwt.jwt.secret, option)
};

//rewrite refresh token in DB
export const replaceDbRefreshToken = (tokenId: string, userId: string) =>
    tokenModel.findOneAndRemove({userId})
        .exec()
        .then(() => tokenModel.create({tokenId, userId}));
