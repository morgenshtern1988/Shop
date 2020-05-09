import {Router} from "express";
import {tokenAccessLifeCheck} from "./auth/handlers/auth.handlers";
import {AuthMiddleware} from "../middleware/auth.middleware";
import {PermissionMiddleware} from "../middleware/permission.middleware";
import {
    adminCreateProduct,
    adminRemoveProduct,
    adminShowProduct, adminUpdateProduct, userShowProductAsync
} from "./printing-editions/handlers/printingEgitions.handler";
import {adminCreateAuthor, adminRemoveAuthor, adminShowAuthor} from "./authors/handlers";

export const adminProductRouter = Router();
//author
adminProductRouter.get("/author", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminShowAuthor);
adminProductRouter.post("/author/create", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminCreateAuthor);
adminProductRouter.delete("/author/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminRemoveAuthor);
adminProductRouter.put("/author");

//printing-editing
adminProductRouter.get("/", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminShowProduct);
///////
adminProductRouter.post("/create", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminCreateProduct);
///////
adminProductRouter.delete("/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminRemoveProduct);
adminProductRouter.put("/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminUpdateProduct);



export const userProductRouter = Router();
userProductRouter.get("/", userShowProductAsync);
