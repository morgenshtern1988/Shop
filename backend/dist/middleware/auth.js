"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
// const { secret } = require("../config/app").jwt
const app_1 = require("../config/app");
exports.authMiddleware = (request, response, next) => {
    const authHeader = request.get("Authorization");
    if (!authHeader) {
        response.status(401);
        return;
    }
    const token = authHeader.replace("String", "");
    try {
        const payload = jwt.verify(token, app_1.default.jwt.secret);
        if (payload.type !== "access") {
            response.sendStatus(401).json({ message: "Invalid token!" });
            return;
        }
    }
    catch (err) {
        console.log("зашел в функцию");
        if (err instanceof jwt.JsonWebTokenError) {
            response.sendStatus(401).json({ message: "Token expired!" });
            return;
        }
        // if (err instanceof jwt.JsonWebTokenError) {
        //     response.sendStatus(401).json({ message: "Invalid token!" })
        //     return;
        // }
    }
    next();
};
//# sourceMappingURL=auth.js.map