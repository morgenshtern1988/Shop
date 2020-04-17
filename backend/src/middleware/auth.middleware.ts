import {Response, Request, NextFunction} from "express";
import * as jwt from "jsonwebtoken";
import appJwt from "../config/app";
import {JsonWebTokenError} from "jsonwebtoken";

export const AuthMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const accessToken = request.headers.authorization;
    try {
        if (!accessToken) {
            response.status(401).send("no token provider");
        }
        jwt.verify(accessToken, appJwt.jwt.secret, (err: JsonWebTokenError, decoder: any) => {
                if (err) {
                    response.status(401).send(err);
                }
                request.user = decoder;
            }
        );
        next();
    } catch (e) {
        response.status(401).send('Invalid token');
    }
};
