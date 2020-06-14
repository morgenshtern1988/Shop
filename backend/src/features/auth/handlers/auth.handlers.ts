import {Response, Request, NextFunction} from "express";
import {loginUser} from "../services/auth.services";
import * as jwt from "jsonwebtoken";
import appJwt from "../../../config/app";
import {registerUserByEmail, updateTokens} from "../repositories/authRepositories";
import {userModel} from "../../../dataAccess/entityModels/user";

export const getUserInfo = async (req: Request, res: Response) => {
    const userInDb = await userModel.findById(req.user.id);
    const {firstName, lastName, role, email, _id} = userInDb;
    const data = {
        firstName, lastName, role, email, _id
    };
    res.json(data);
};

export const authenticateUser = async (request: Request, response: Response, next: NextFunction) => {
    loginUser(request.body)
        .then((token: any) => {
            response.json(token)
        })
        .catch((err: any) => {
                response.json({msg: err.message});
            }
        );
};

export const tokenAccessLifeCheck = async (request: Request, response: Response, next: NextFunction) => {
    const accessToken = request.headers.authorization;
    let payload: any;

    if (!accessToken) {
        response.status(401).send('No token provided');
        return;
    }

    try {
        const resultVerify = await jwt.verify(accessToken, appJwt.jwt.secret);
        next();
    } catch (e) {
        response.status(401).send(e);
    }
};
export const refreshTokens = async (request: Request, response: Response) => {
    const refreshToken = request.headers.authorization;
    let payload: any;
    try {
        payload = jwt.verify(refreshToken, appJwt.jwt.secret);
        let {role, id} = payload;
        const user = {
            id,
            role
        };
        const token = await updateTokens(user);
        response.json(token);
    } catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            response.status(401).json({message: "Token expired"});
            return;
        } else if (e instanceof jwt.JsonWebTokenError) {
            response.status(401).json({message: "Invalid token!"});
            return;
        }
    }
};

import msgs from "../email.msgs"
import sendEmail from "../email.send";
import templates from "../email.templates";

export const collectEmail = async (req: Request, res: Response) => {
    const {email, firstName, lastName, password} = req.body;
    await userModel.findOne({email})
        .then((user: any) => {
            // У нас новый пользователь! Отправьте им подтверждение по электронной почте.
            if (!user) {
                registerUserByEmail(req.body)
                    .then(newUser => sendEmail(newUser.email, templates.confirm(newUser._id)))
                    .then(() => res.json({msg: msgs.confirm}))
                    .catch(err => console.log(err))
            }
                // Мы уже видели этот адрес электронной почты. Но пользователь не имеет
            // нажали на ссылку подтверждения. Отправить еще одно подтверждение по электронной почте.
            else if (user && !user.confirmed) {
                sendEmail(user.email, templates.confirm(user._id))
                    .then(() => res.json({msg: msgs.resend}))
            }
            // Пользователь уже подтвердил этот адрес электронной почты
            else {
                res.json({msg: msgs.alreadyConfirmed})
            }

        })
        .catch(err => {
            console.log(err)
        })
};

export const confirmEmail = async (req: Request, res: Response) => {
    const {id} = req.params;
    console.log(req.params);
    await userModel.findById(id)
        .then(user => {
            // Пользователь с таким идентификатором не существует в БД. Возможно, некоторые хитрые
            // пользователь попытался перейти на URL, отличный от того, который указан в
            // подтверждение по электронной почте.
            if (!user) {
                res.json({msg: msgs.couldNotFind})
            }
                // Пользователь существует, но не был подтвержден. Мы должны подтвердить это
            // Пользователь и сообщить им, что их адрес электронной почты подтвержден.
            else if (user && !user.confirmed) {
                userModel.findByIdAndUpdate(id, {confirmed: true})
                    .then(() => res.json({msg: msgs.confirmed}))
                    .catch(err => console.log(err))
            }
            // Пользователь уже подтвердил этот адрес электронной почты.
            else {
                res.json({msg: msgs.alreadyConfirmed})
            }
        })
        .catch(err => console.log(err))
};

