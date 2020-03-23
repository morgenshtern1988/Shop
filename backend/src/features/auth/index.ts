import { Router } from "express";
import * as express from "express"
import {registerUser, authorizationUser} from "./repositories/authRepositories"
const jsonParser = express.json();

export const authRouter = Router();

authRouter.post("/register", jsonParser, registerUser);
authRouter.post("/login", jsonParser, authorizationUser);
// authRouter.post("/refresh-tokens", refreshTokens);