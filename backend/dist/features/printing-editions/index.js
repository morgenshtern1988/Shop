"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const printingEgitions_handler_1 = require("./handlers/printingEgitions.handler");
const auth_handlers_1 = require("../auth/handlers/auth.handlers");
exports.adminProductRouter = express_1.Router();
//authMiddleware
exports.adminProductRouter.get("/", auth_handlers_1.tokenAccessLifeCheck, printingEgitions_handler_1.adminShowProduct);
exports.adminProductRouter.post("/create", auth_handlers_1.tokenAccessLifeCheck, printingEgitions_handler_1.adminCreateProduct);
exports.adminProductRouter.delete("/:id", auth_handlers_1.tokenAccessLifeCheck, printingEgitions_handler_1.adminRemoveProduct);
exports.adminProductRouter.put("/:id", auth_handlers_1.tokenAccessLifeCheck, printingEgitions_handler_1.adminUpdateProduct);
//# sourceMappingURL=index.js.map