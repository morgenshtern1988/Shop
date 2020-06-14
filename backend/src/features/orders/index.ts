import {Router} from "express";
import {createOrder} from "./handlers";

export const userOrder = Router();

userOrder.post("/", createOrder);
