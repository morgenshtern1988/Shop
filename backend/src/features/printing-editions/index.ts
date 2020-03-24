import {Router} from "express";
import {adminCreateProduct, adminShowProduct, adminRemoveProduct, adminUpdateProduct} from "./handlers/printingEgitions.handler";

export const adminProductRouter = Router();

//authMiddleware
adminProductRouter.get("/", adminShowProduct);
adminProductRouter.post("/create", adminCreateProduct);
adminProductRouter.delete("/:id", adminRemoveProduct);
adminProductRouter.put("/:id", adminUpdateProduct);
