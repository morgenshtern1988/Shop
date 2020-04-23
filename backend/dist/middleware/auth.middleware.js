"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const app_1 = require("../config/app");
exports.AuthMiddleware = (request, response, next) => {
    const accessToken = request.headers.authorization;
    try {
        if (!accessToken) {
            response.status(401).send("no token provider");
        }
        jwt.verify(accessToken, app_1.default.jwt.secret, (err, decoder) => {
            if (err) {
                response.status(401).send(err);
            }
            request.user = decoder;
        });
        next();
    }
    catch (e) {
        response.status(401).send('Invalid token');
    }
};
//# sourceMappingURL=auth.middleware.js.map