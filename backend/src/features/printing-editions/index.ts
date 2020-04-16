import {Router} from "express";
import {
    adminCreateProduct,
    adminShowProduct,
    adminRemoveProduct,
    adminUpdateProduct, userShowProductAsync
} from "./handlers/printingEgitions.handler";
import {tokenAccessLifeCheck} from "../auth/handlers/auth.handlers";
import {AuthMiddleware} from "../../middleware/auth.middleware";
import {PermissionMiddleware} from "../../middleware/permission.middleware";

export const adminProductRouter = Router();
export const userProductRouter = Router();

adminProductRouter.get("/", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminShowProduct);
adminProductRouter.post("/create", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminCreateProduct);
adminProductRouter.delete("/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminRemoveProduct);
adminProductRouter.put("/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminUpdateProduct);

userProductRouter.get("/", tokenAccessLifeCheck, AuthMiddleware, userShowProductAsync);
// userProductRouter.get("/", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware, userShowProductAsync);
