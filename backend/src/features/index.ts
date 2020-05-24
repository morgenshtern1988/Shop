import {Router} from "express";
import {tokenAccessLifeCheck} from "./auth/handlers/auth.handlers";
import {AuthMiddleware} from "../middleware/auth.middleware";
import {PermissionMiddleware} from "../middleware/permission.middleware";
import {
    adminCreateProduct,
    adminRemoveProduct,
    adminShowProduct, adminUpdateProduct, userShowProductAsync, userSortCategory, userSortProduct
} from "./printing-editions/handlers/printingEgitions.handler";
import {adminCreateAuthor, adminRemoveAuthor, adminShowAuthor} from "./authors/handlers";
import {adminShowUser} from "./user/handlers";

export const adminProductRouter = Router();
//author
// adminProductRouter.get("/author", adminShowAuthor);
adminProductRouter.get("/author", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminShowAuthor);
adminProductRouter.post("/author/create", adminCreateAuthor);
// adminProductRouter.post("/author/create", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminCreateAuthor);
adminProductRouter.delete("/author/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminRemoveAuthor);
adminProductRouter.put("/author");

//printing-editing
// adminProductRouter.get("/", adminShowProduct);
adminProductRouter.get("/", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminShowProduct);
// adminProductRouter.post("/create", adminCreateProduct);
adminProductRouter.post("/create", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminCreateProduct);
adminProductRouter.delete("/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminRemoveProduct);
adminProductRouter.put("/:id", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminUpdateProduct);

adminProductRouter.get("/user", tokenAccessLifeCheck, AuthMiddleware, PermissionMiddleware([1]), adminShowUser);


export const userProductRouter = Router();
userProductRouter.get("/", userShowProductAsync);
userProductRouter.post("/sort-filter", userSortProduct);
userProductRouter.post("/sort-category", userSortCategory);
