import {Router} from "express";
import {
    adminCreateProduct,
    adminShowProduct,
    adminRemoveProduct,
    adminUpdateProduct
} from "./handlers/printingEgitions.handler";
import {AuthMiddleware} from "../../middleware/auth.middleware";

export const adminProductRouter = Router();

//authMiddleware
adminProductRouter.get("/", AuthMiddleware, adminShowProduct);
adminProductRouter.post("/create", adminCreateProduct);
adminProductRouter.delete("/:id", adminRemoveProduct);
adminProductRouter.put("/:id", adminUpdateProduct);
