import * as jwt from "jsonwebtoken";

const uuid = require("uuid/v4");
import {tokenModel} from "../dataAccess/entityModels/tokien";
import appJwt from "../config/app";
import {printingEditionModel} from "../dataAccess/entityModels/printing-edition";

export const generateAccessToken = async (user: any) => {
    const payload = {
        role: user.role,
        id: user._id,
        type: appJwt.jwt.tokens.access.type,
    };
    const option = {expiresIn: appJwt.jwt.tokens.access.expiresIn};
    return jwt.sign(payload, appJwt.jwt.secret, option)
};

export const generateRefreshToken = async (user: any) => {
    const payload = {
        id: user._id,
        role: user.role,
        type: appJwt.jwt.tokens.refresh.type,
    };
    const option = {expiresIn: appJwt.jwt.tokens.refresh.expiresIn};
    return jwt.sign(payload, appJwt.jwt.secret, option)
};

export const replaceDbRefreshToken = (tokenId: string, userId: string) =>
    tokenModel.findOneAndRemove({userId})
        .exec()
        .then(() => tokenModel.create({tokenId, userId}));


export const resLengthCollection = async (limit: number) => {
    const res = await printingEditionModel.find({});
    let totalPages = [];
    for (let i = 1; i <= Math.ceil(res.length / limit); i++) {
        totalPages.push(i)
    }
    return totalPages
};
