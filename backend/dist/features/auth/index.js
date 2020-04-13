"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_handlers_1 = require("./handlers/auth.handlers");
exports.authRouter = express_1.Router();
exports.authRouter.post("/register", auth_handlers_1.registerUser);
exports.authRouter.post("/login", auth_handlers_1.authenticateUser);
exports.authRouter.post("/refresh-tokens", auth_handlers_1.refreshTokens);
exports.authRouter.post("/access-tokens", auth_handlers_1.tokenAccessLifeCheck);
//# sourceMappingURL=index.js.map