"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_handlers_1 = require("./handlers/auth.handlers");
const auth_middleware_1 = require("../../middleware/auth.middleware");
exports.authRouter = express_1.Router();
exports.authRouter.post("/register", auth_handlers_1.registerUser);
exports.authRouter.post("/login", auth_handlers_1.authenticateUser);
exports.authRouter.get("/refresh-tokens", auth_handlers_1.refreshTokens);
exports.authRouter.post("/access-tokens", auth_handlers_1.tokenAccessLifeCheck);
exports.authRouter.get("/getUserInfo", auth_middleware_1.AuthMiddleware, auth_handlers_1.getUserInfo);
//# sourceMappingURL=index.js.map