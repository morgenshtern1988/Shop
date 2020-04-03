import {IUser} from "../../../types/interface/user";
import {userModel} from "../../../dataAccess/entityModels/user";
import * as bcrypt from 'bcrypt';

export const registerUser = async (user:IUser) =>{
    user.password = await bcrypt.hash(user.password, 10);
    await userModel.insertMany(user)
};






// import * as express from 'express';
// import { userModel } from "../../../dataAccess/entityModels/login";
// import * as mongoose from 'mongoose';
// import { tokenModel } from "../../../dataAccess/entityModels/tokien"
// import appJwt from "../../../config/app"
// import {generateAccessToken, replaceDbRefreshToken, generateRefreshToken } from "../../../helpers/authHelpers"
// // const authHelper = require("../../helpers/authHelpers");
// const jwt = require("jsonwebtoken");


// //геnерируем токены и обновляем refresh v mongo
// export const updateTokens = (userId: any) => {
//     const accessToken = generateAccessToken(userId);
//     const refreshToken = generateRefreshToken();
//     return replaceDbRefreshToken(refreshToken.id, userId)
//         .then(() => ({
//             accessToken,
//             refreshToken: refreshToken.token,
//         }))
// }

// export const registerUser = async function (request: express.Request, response: express.Response) {
//     try {
//         if (request.body === {}) {
//             response.sendStatus(400)
//             return;
//         }
//         const login = request.body;
//         if (login.password !== "undefined" || login.password !== "null") {
//             login.password = await bcrypt.hash(login.password, 10);
//             await userModel.insertMany(login, (err: any, result: any) => {
//                 response.send(login);
//                 return;
//             })
//         }
//     }
//     catch{
//         response.sendStatus(400)
//     }
// }

// export const authorizationUser = async function (request: express.Request, response: express.Response, next: express.NextFunction) {
//     const logInData = request.body;
//     const login = await userModel.findOne({ email: logInData.email });
//     if (login) {
//         const isPasswordMatching = await bcrypt.compare(logInData.password, login.password);
//         if (isPasswordMatching) {
//             updateTokens(login._id)
//                 .then((tokens: any) => response.json(tokens));
//         } else response.sendStatus(401)
//     } else response.sendStatus(401)
// };


// export const refreshTokens = (req: express.Request, res: express.Response) => {
//     const { refreshToken } = req.body;
//     let payload;
//     try {
//         payload = jwt.verify(refreshToken, appJwt.jwt.secret);
//         if (payload.type !== "refresh") {
//             res.status(400).json({ message: "Invalid token" });
//             return;
//         }
//     } catch (e) {
//         if (e instanceof jwt.TokenExpiredError) {
//             res.status(400).json({ message: "Token expired" });
//             return;
//         } else if (e instanceof jwt.JsonWebTokenError) {
//             res.status(400).json({ message: "Invalid token!" })
//             return;
//         }
//     }
//     ///zdez
//     tokenModel.findOne({ tokenId: payload.id })
//         .then((token: any) => {
//             if (token === null) {
//                 throw new Error("Invalid token!");
//             }
//             return updateTokens((token.userId));
//         })
//         .then((tokens: any) => res.json(tokens))
//         .catch((err: any) => res.status(400).json({ message: err.message }))
// };
// // module.exports = {
// //     authorizationUser,
// //     registerUser,
// //     refreshTokens
// // };
