"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const printingEgitions_handler_1 = require("./handlers/printingEgitions.handler");
exports.adminProductRouter = express_1.Router();
//authMiddleware
exports.adminProductRouter.get("/", printingEgitions_handler_1.adminShowProduct);
exports.adminProductRouter.post("/create", printingEgitions_handler_1.adminCreateProduct);
exports.adminProductRouter.delete("/:id", printingEgitions_handler_1.adminRemoveProduct);
exports.adminProductRouter.put("/:id", printingEgitions_handler_1.adminUpdateProduct);
//# sourceMappingURL=index.js.map