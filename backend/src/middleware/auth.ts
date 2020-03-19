import * as express from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';

const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/config")


module.exports = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    
    const authHeader = request.get("Authorization")
    if (!authHeader) {
        response.status(404)
    }
    const token = authHeader.replace("Bearer", "");
    console.log("--------")
    console.log(authHeader)
    console.log("--------")
    console.log(token)
    try {
        jwt.verify(token, jwtSecret)
    } catch (err) {
        if (err instanceof JsonWebTokenError) {
            response.sendStatus(401)
        }
    }
    next();
}