"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const printingEgitions_handler_1 = require("./handlers/printingEgitions.handler");
const auth_handlers_1 = require("../auth/handlers/auth.handlers");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const permission_middleware_1 = require("../../middleware/permission.middleware");
const auth_1 = require("../../controllers/auth");
exports.adminProductRouter = express_1.Router();
exports.adminProductRouter.get("/", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), printingEgitions_handler_1.adminShowProduct);
exports.adminProductRouter.post("/create", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), printingEgitions_handler_1.adminCreateProduct);
exports.adminProductRouter.delete("/:id", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), printingEgitions_handler_1.adminRemoveProduct);
exports.adminProductRouter.put("/:id", auth_handlers_1.tokenAccessLifeCheck, auth_middleware_1.AuthMiddleware, permission_middleware_1.PermissionMiddleware([1]), printingEgitions_handler_1.adminUpdateProduct);
exports.userProductRouter = express_1.Router();
exports.userProductRouter.get("/", auth_1.controllerRole, printingEgitions_handler_1.userShowProductAsync);
// userProductRouter.get("/", tokenAccessLifeCheck, AuthMiddleware, controllerRole, userShowProductAsync);
//# sourceMappingURL=index.js.map