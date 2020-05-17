"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printingEditionsRepositories_1 = require("../repositories/printingEditionsRepositories");
const printingEditionsRepositories_2 = require("../repositories/printingEditionsRepositories");
const authHelpers_1 = require("../../../helpers/authHelpers");
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
exports.userShowProduct = async (query) => {
    let pagination = authHelpers_1.paramPagination(query);
    const { startIndex, currentPage, limit } = pagination;
    const res = await printingEditionsRepositories_1.userShowProductAsync(startIndex, limit);
    return Object.assign(Object.assign({}, res), { currentPage: currentPage });
};
exports.sortProduct = async ({ value, query }) => {
    let pagination = authHelpers_1.paramPagination(query);
    const { startIndex, currentPage, limit } = pagination;
    // console.log(query);
    // console.log(value);
    const res = await printingEditionsRepositories_1.userSortProduct({ value, startIndex, limit });
    return Object.assign(Object.assign({}, res), { currentPage: currentPage });
};
//# sourceMappingURL=printingEditionsServices.js.map