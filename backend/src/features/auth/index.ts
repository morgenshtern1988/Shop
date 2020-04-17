import {Router} from "express";
import {registerUser, authenticateUser, refreshTokens, tokenAccessLifeCheck} from "./handlers/auth.handlers"
import {controllerRole} from "../../controllers/auth";

export const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", authenticateUser);
authRouter.get("/refresh-tokens", refreshTokens);
authRouter.post("/access-tokens", tokenAccessLifeCheck);
