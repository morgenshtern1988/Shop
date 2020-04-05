"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_handlers_1 = require("./handlers/auth.handlers");
exports.authRouter = express_1.Router();
exports.authRouter.post("/register", auth_handlers_1.registerUser);
exports.authRouter.post("/login", auth_handlers_1.authenticateUser);
// authRouter.post("/refresh-tokens", refreshTokens);
//# sourceMappingURL=index.js.map