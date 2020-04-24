import {Router} from "express";
import {
    registerUser,
    authenticateUser,
    refreshTokens,
    tokenAccessLifeCheck,
    getUserInfo
} from "./handlers/auth.handlers"
import {AuthMiddleware} from "../../middleware/auth.middleware";

export const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", authenticateUser);
authRouter.get("/refresh-tokens", refreshTokens);
authRouter.post("/access-tokens", tokenAccessLifeCheck);
authRouter.get("/getUserInfo", AuthMiddleware, getUserInfo);
