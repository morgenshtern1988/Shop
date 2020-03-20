import * as bcrypt from 'bcrypt';
import * as express from 'express';
import { userModel } from "../../dataAccess/entityModels/user";
import * as mongoose from 'mongoose';
import { tokenModel } from "../../dataAccess/entityModels/tokien"

const authHelper = require("../../helpers/authHelpers");
const { secret } = require("../../config/app").jwt;
const jwt = require("jsonwebtoken");


//геnерируем токены и обновляем refresh v mongo
const updateTokens = (userId: any) => {
    const accessToken = authHelper.generateAccessToken(userId);
    const refreshToken = authHelper.generateRefreshToken();
    return authHelper.replaceDbRefreshToken(refreshToken.id, userId)
        .then(() => ({
            accessToken,
            refreshToken: refreshToken.token,
        }))
}

const registerUser = async function (request: express.Request, response: express.Response) {
    try {
        if (request.body === {}) {
            response.sendStatus(400)
            return;
        }
        const user = request.body;
        if (user.password !== "undefined" || user.password !== "null") {
            user.password = await bcrypt.hash(user.password, 10);
            await userModel.insertMany(user, (err: any, result: any) => {
                response.send(user);
                return;
            })
        }
    }
    catch{
        response.sendStatus(400)
    }
}

const authorizationUser = async function (request: express.Request, response: express.Response, next: express.NextFunction) {
        const logInData = request.body;
        const user = await userModel.findOne({ email: logInData.email });
        if (user) {
            const isPasswordMatching = await bcrypt.compare(logInData.password, user.password);
            if (isPasswordMatching) {
                updateTokens(user._id).then((tokens: any) => response.json(tokens));
            } else response.sendStatus(401).json({ massage: "Error 401" })
        } else response.sendStatus(401)
    };


    const refreshTokens = (req: express.Request, res: express.Response) => {
        const { refreshToken } = req.body;
        let payload;
        try {
            payload = jwt.verify(refreshToken, secret);
            if (payload.type !== "refresh") {
                res.status(400).json({ message: "Invalid token" });
                return;
            }
        } catch (e) {
            if (e instanceof jwt.TokenExpiredError) {
                res.status(400).json({ message: "Token expired" });
                return;
            } else if (e instanceof jwt.JsonWebTokenError) {
                res.status(400).json({ message: "Invalid token!" })
                return;
            }
        }
        ///zdez
        tokenModel.findOne({ tokenId: payload.id })
            .then((token: any) => {
                if (token === null) {
                    throw new Error("Invalid token!");
                }
                return updateTokens((token.userId));
            })
            .then((tokens: any) => res.json(tokens))
            .catch((err: any) => res.status(400).json({ message: err.message }))
    };
    module.exports = {
        authorizationUser,
        registerUser,
        refreshTokens
    };
