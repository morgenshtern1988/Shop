import {Router} from "express";
import {registerUser, authenticateUser, refreshTokens, tokenAccessLifeCheck} from "./handlers/auth.handlers"

export const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", authenticateUser);
authRouter.post("/refresh-tokens", refreshTokens);
authRouter.post("/access-tokens", tokenAccessLifeCheck);
