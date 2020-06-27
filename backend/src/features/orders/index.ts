import {Router} from "express";
import {createOrder, getOrders} from "./handlers";
import {tokenAccessLifeCheck} from "../auth/handlers/auth.handlers";
import {AuthMiddleware} from "../../middleware/auth.middleware";

export const userOrder = Router();

userOrder.post("/create", tokenAccessLifeCheck, AuthMiddleware, createOrder);
// userOrder.post("/", tokenAccessLifeCheck, AuthMiddleware, getOrders);
userOrder.post("/", getOrders);
