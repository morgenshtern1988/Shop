import {Router} from "express";
import {
    adminCreateProduct,
    adminShowProduct,
    adminRemoveProduct,
    adminUpdateProduct
} from "./handlers/printingEgitions.handler";
import {tokenAccessLifeCheck} from "../auth/handlers/auth.handlers";

export const adminProductRouter = Router();

//authMiddleware
adminProductRouter.get("/", tokenAccessLifeCheck, adminShowProduct);
adminProductRouter.post("/create", tokenAccessLifeCheck, adminCreateProduct);
adminProductRouter.delete("/:id", tokenAccessLifeCheck, adminRemoveProduct);
adminProductRouter.put("/:id", tokenAccessLifeCheck, adminUpdateProduct);
