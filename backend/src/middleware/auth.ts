import * as express from 'express';

const jwt = require("jsonwebtoken");
// const { secret } = require("../config/app").jwt
import appJwt from "../config/app"


export const authMiddleware = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const authHeader = request.get("Authorization")
    if (!authHeader) {
        response.status(401);
        return;
    }
    const token = authHeader.replace("String", "");
    try {
        const payload = jwt.verify(token, appJwt.jwt.secret)
        if (payload.type !== "access") {
            response.sendStatus(401).json({ message: "Invalid token!" });
            return;
        }
    } catch (err) {
    console.log("зашел в функцию")

        if (err instanceof jwt.JsonWebTokenError) {
            response.sendStatus(401).json({ message: "Token expired!" })
            return;
        }
        // if (err instanceof jwt.JsonWebTokenError) {
        //     response.sendStatus(401).json({ message: "Invalid token!" })
        //     return;
        // }
    }
    next();
}
