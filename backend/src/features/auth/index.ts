import {Router} from "express";
import {registerUser, authenticateUser, refreshTokens, tokenAccessLifeCheck} from "./handlers/auth.handlers"
import {controllerRole} from "../../controllers/auth";
import {AuthMiddleware} from "../../middleware/auth.middleware";

export const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", authenticateUser);
// authRouter.post("/login", authenticateUser, AuthMiddleware, controllerRole);
authRouter.get("/refresh-tokens", refreshTokens);
authRouter.post("/access-tokens", tokenAccessLifeCheck);
