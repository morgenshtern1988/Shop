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
async function showProduct() {
    return await printingEditionsRepositories_2.adminShowProduct();
}
exports.showProduct = showProduct;
async function userShowProduct(printingEditions) {
    if (printingEditions === null) {
        return "Error";
    }
    else {
        return await printingEditionsRepositories_1.userShowProductAsync(printingEditions);
    }
}
exports.userShowProduct = userShowProduct;
async function removeProduct(id) {
    return printingEditionsRepositories_1.adminRemoveProduct(id);
}
exports.removeProduct = removeProduct;
async function updateProduct(printingEditions, id) {
    // console.log(id);
    // console.log(printingEditions);
    return printingEditionsRepositories_1.adminUpdateProduct(printingEditions, id);
}
exports.updateProduct = updateProduct;
//# sourceMappingURL=printingEditionsServices.js.map