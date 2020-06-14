import {Router} from "express";
import {tokenAccessLifeCheck} from "./auth/handlers/auth.handlers";
import {AuthMiddleware} from "../middleware/auth.middleware";
import {PermissionMiddleware} from "../middleware/permission.middleware";
import {
    adminCreateProduct,
    adminRemoveProduct,
    adminShowProduct, adminUpdateProduct, sortCategory, userShowProductAsync, userSortCategory, userSortProduct
} from "./printing-editions/handlers/printingEgitions.handler";
import {adminCreateAuthor, adminRemoveAuthor, adminShowAllAuthor, adminShowAuthor} from "./authors/handlers";
import {adminShowUser} from "./user/handlers";

export const adminProductRouter = Router();
//author
adminProductRouter.get("/author", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminShowAuthor);
adminProductRouter.get("/all-author", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminShowAllAuthor);
// adminProductRouter.get("/all-author",adminShowAllAuthor);
adminProductRouter.post("/author/create", adminCreateAuthor);
adminProductRouter.delete("/author/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminRemoveAuthor);
adminProductRouter.put("/author");

//printing-editing
adminProductRouter.get("/", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminShowProduct);
adminProductRouter.post("/create", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminCreateProduct);
adminProductRouter.delete("/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminRemoveProduct);
adminProductRouter.put("/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminUpdateProduct);
adminProductRouter.post("/sort-category", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), sortCategory);
adminProductRouter.get("/user", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminShowUser);


export const userProductRouter = Router();
userProductRouter.get("/", userShowProductAsync);
userProductRouter.post("/sort-filter", userSortProduct);
userProductRouter.post("/sort-category", userSortCategory);
