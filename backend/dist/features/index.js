"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_handlers_1 = require("./auth/handlers/auth.handlers");
const auth_middleware_1 = require("../middleware/auth.middleware");
const permission_middleware_1 = require("../middleware/permission.middleware");
const printingEgitions_handler_1 = require("./printing-editions/handlers/printingEgitions.handler");
const handlers_1 = require("./authors/handlers");
const handlers_2 = require("./user/handlers");
exports.adminProductRouter = express_1.Router();
//author
// adminProductRouter.get("/author", adminShowAuthor);
exports.adminProductRouter.get("/author", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), handlers_1.adminShowAuthor);
// adminProductRouter.post("/author/create", adminCreateAuthor);
exports.adminProductRouter.post("/author/create", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), handlers_1.adminCreateAuthor);
exports.adminProductRouter.delete("/author/:id", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), handlers_1.adminRemoveAuthor);
exports.adminProductRouter.put("/author");
//printing-editing
// adminProductRouter.get("/", adminShowProduct);
exports.adminProductRouter.get("/", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), printingEgitions_handler_1.adminShowProduct);
// adminProductRouter.post("/create", adminCreateProduct);
exports.adminProductRouter.post("/create", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), printingEgitions_handler_1.adminCreateProduct);
exports.adminProductRouter.delete("/:id", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), printingEgitions_handler_1.adminRemoveProduct);
exports.adminProductRouter.put("/:id", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), printingEgitions_handler_1.adminUpdateProduct);
exports.adminProductRouter.get("/user", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), handlers_2.adminShowUser);
exports.userProductRouter = express_1.Router();
exports.userProductRouter.get("/", printingEgitions_handler_1.userShowProductAsync);
exports.userProductRouter.post("/sort", printingEgitions_handler_1.userSortProduct);
//# sourceMappingURL=index.js.map