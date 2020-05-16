"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_services_1 = require("../services/auth.services");
const jwt = require("jsonwebtoken");
const app_1 = require("../../../config/app");
const authRepositories_1 = require("../repositories/authRepositories");
const user_1 = require("../../../dataAccess/entityModels/user");
exports.getUserInfo = async (req, res) => {
    const userInDb = await user_1.userModel.findById(req.user.id);
    const { firstName, lastName, role, email } = userInDb;
    const data = {
        firstName, lastName, role, email,
    };
    res.json(data);
};
exports.registerUser = async (request, response) => {
    auth_services_1.createUser(request.body)
        .then(user => response.json(user))
        .catch(err => response.json(err));
};
exports.authenticateUser = async (request, response, next) => {
    auth_services_1.loginUser(request.body)
        .then((token) => response.json(token))
        .catch(() => response.sendStatus(401));
};
exports.tokenAccessLifeCheck = async (request, response, next) => {
    const accessToken = request.headers.authorization;
    let payload;
    if (!accessToken) {
        response.status(401).send('No token provided');
        return;
    }
    try {
        const resultVerify = await jwt.verify(accessToken, app_1.default.jwt.secret);
        next();
    }
    catch (e) {
        response.status(401).send(e);
    }
};
exports.refreshTokens = async (request, response) => {
    const refreshToken = request.headers.authorization;
    let payload;
    try {
        payload = jwt.verify(refreshToken, app_1.default.jwt.secret);
        let { role, id } = payload;
        const user = {
            id,
            role
        };
        const token = await authRepositories_1.updateTokens(user);
        response.json(token);
    }
    catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            response.status(401).json({ message: "Token expired" });
            return;
        }
        else if (e instanceof jwt.JsonWebTokenError) {
            response.status(401).json({ message: "Invalid token!" });
            return;
        }
    }
};
//# sourceMappingURL=auth.handlers.js.map