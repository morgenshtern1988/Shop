"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printingEditionsServices_1 = require("../services/printingEditionsServices");
exports.adminShowProduct = async function (request, response) {
    printingEditionsServices_1.showProduct(request.body)
        .then((printingEdition) => response.json(printingEdition))
        .catch((err) => response.json(err));
};
//authMiddleware
exports.adminCreateProduct = async (request, response) => {
    printingEditionsServices_1.createProduct(request.body)
        .then((printingEdition) => response.json(printingEdition))
        .catch((err) => response.json(err));
};
exports.adminRemoveProduct = async (request, response) => {
    const id = request.params.id;
    printingEditionsServices_1.removeProduct(id)
        .then((printingEdition) => response.json(printingEdition))
        .catch((err) => response.json(err));
};
exports.adminUpdateProduct = async (request, response) => {
    const id = request.params.id;
    printingEditionsServices_1.updateProduct(request.body, id)
        .then((printingEdition) => response.json(printingEdition))
        .catch((err) => response.json(err));
};
//# sourceMappingURL=printingEgitions.handler.js.map