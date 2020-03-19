import * as express from 'express';
import {JsonWebTokenError} from 'jsonwebtoken';

const jwt = require("jsonwebtoken");
const {secret} = require("../config/app").jwt


module.exports = (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const authHeader = request.get("Authorization")
    if (!authHeader) {
        response.status(401);
        return;
    }
    const token = authHeader.replace("String", "");
    try {
        const payload = jwt.verify(token, secret)
        if (payload.type !== "access") {
            response.status(401).json({message: "Invalid token!"});
            return;
        }
    } catch (err) {
        if(err instanceof jwt.JsonWebTokenError){
            response.sendStatus(401).json({message: "Token expired!"})
            return;
        }
        if (err instanceof jwt.JsonWebTokenError) {
            response.sendStatus(401).json({message: "Invalid token!"})
            return;
        }
    }
    next();
}
