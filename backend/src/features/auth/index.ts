import { Router } from "express";
import {registerUser, authenticateUser}from "./handlers/auth.handlers"

export const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", authenticateUser);
// authRouter.post("/refresh-tokens", refreshTokens);
