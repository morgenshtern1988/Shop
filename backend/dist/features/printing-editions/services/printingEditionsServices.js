"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printingEditionsRepositories_1 = require("../repositories/printingEditionsRepositories");
const printingEditionsRepositories_2 = require("../repositories/printingEditionsRepositories");
async function createProduct(printingEdition) {
    if (printingEdition === null) {
        return "some field is null";
    }
    else {
        return await printingEditionsRepositories_1.adminCreateProduct(printingEdition);
    }
}
exports.createProduct = createProduct;
async function showProduct(printingEditions) {
    if (printingEditions === null) {
        return "Error";
    }
    else {
        return await printingEditionsRepositories_2.adminShowProduct(printingEditions);
    }
}
exports.showProduct = showProduct;
//5e6fe7206c82e932a0351ae8
async function removeProduct(id) {
    printingEditionsRepositories_1.adminRemoveProduct(id);
}
exports.removeProduct = removeProduct;
async function updateProduct(printingEditions, id) {
    console.log(id);
    console.log(printingEditions);
    printingEditionsRepositories_1.adminUpdateProduct(printingEditions, id);
}
exports.updateProduct = updateProduct;
//# sourceMappingURL=printingEditionsServices.js.map