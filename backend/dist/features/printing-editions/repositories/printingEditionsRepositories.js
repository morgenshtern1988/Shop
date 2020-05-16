"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printing_edition_1 = require("../../../dataAccess/entityModels/printing-edition");
const authors_1 = require("../../../dataAccess/entityModels/authors");
//authMiddleware
exports.adminShowProduct = async function () {
    return printing_edition_1.printingEditionModel.find({}).populate("author_ids");
};
exports.userShowProductAsync = async function (printingEdition) {
    return printing_edition_1.printingEditionModel.find({}).populate("author_ids");
};
//authMiddleware
exports.adminCreateProduct = async (printingEdition) => {
    const result = await printing_edition_1.printingEditionModel.create(printingEdition);
    const arrIdAuthors = printingEdition.author_ids;
    const idProduct = result._id;
    arrIdAuthors.forEach((id) => {
        updateAuthor({ id, idProduct });
    });
    return result;
};
const updateAuthor = async ({ id, idProduct }) => {
    let productArr = await authors_1.authorModel.findById(id);
    productArr.product_ids.push(idProduct);
    await authors_1.authorModel.findByIdAndUpdate(id, { product_ids: productArr.product_ids });
};
exports.adminRemoveProduct = async (id) => {
    // const printingEdition = await printingEditionModel.find({});
    const printingEdition = await printing_edition_1.printingEditionModel.findById(id);
    await printing_edition_1.printingEditionModel.remove(printingEdition);
    const refreshPrintingEditionInDB = await printing_edition_1.printingEditionModel.find({}).populate("author_ids");
    return refreshPrintingEditionInDB;
};
exports.adminUpdateProduct = async (reqPrintingEditions, id) => {
    const printingEdition = await printing_edition_1.printingEditionModel.findById(id);
    await printing_edition_1.printingEditionModel.update(printingEdition, reqPrintingEditions);
};
//# sourceMappingURL=printingEditionsRepositories.js.map