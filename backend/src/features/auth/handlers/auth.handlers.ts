import {Response, Request, NextFunction} from "express";
import {createUser, loginUser} from "../services/auth.services";
import * as jwt from "jsonwebtoken";
import appJwt from "../../../config/app";
import {tokenModel} from "../../../dataAccess/entityModels/tokien";
import {updateTokens} from "../repositories/authRepositories";
import {userModel} from "../../../dataAccess/entityModels/user";

export const registerUser = async (request: Request, response: Response) => {
    createUser(request.body)
        .then(user => response.json(user))
        .catch(err => response.json(err))
};

export const authenticateUser = async (request: Request, response: Response) => {
    loginUser(request.body)
        .then(token => response.json(token))
        .catch(() => response.sendStatus(401))
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

