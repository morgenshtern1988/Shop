import {Router} from "express";
import {
    authenticateUser,
    refreshTokens,
    tokenAccessLifeCheck,
    getUserInfo, collectEmail, confirmEmail
} from "./handlers/auth.handlers"
import {AuthMiddleware} from "../../middleware/auth.middleware";

export const authRouter = Router();

authRouter.post("/login", authenticateUser);
authRouter.get("/refresh-tokens", refreshTokens);
authRouter.post("/access-tokens", tokenAccessLifeCheck);
authRouter.get("/getUserInfo", AuthMiddleware, getUserInfo);


authRouter.post("/email", collectEmail);
authRouter.get('/email/confirm/:id', confirmEmail);
