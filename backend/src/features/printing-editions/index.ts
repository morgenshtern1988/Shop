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
import {controllerRole} from "../../controllers/auth";
import {adminCreateAuthor} from "../authors/handlers";

export const adminProductRouter = Router();

adminProductRouter.get("/", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminShowProduct);
adminProductRouter.post("/create", adminCreateProduct);
// adminProductRouter.post("/create", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminCreateProduct);
adminProductRouter.delete("/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminRemoveProduct);
adminProductRouter.put("/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminUpdateProduct);

adminProductRouter.get("/");
adminProductRouter.post("/", adminCreateAuthor);
adminProductRouter.put("/");

export const userProductRouter = Router();
userProductRouter.get("/", userShowProductAsync);
