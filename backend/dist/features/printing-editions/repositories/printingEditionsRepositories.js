"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printing_edition_1 = require("../../../dataAccess/entityModels/printing-edition");
const authors_1 = require("../../../dataAccess/entityModels/authors");
const authHelpers_1 = require("../../../helpers/authHelpers");
exports.adminShowProduct = async function () {
    return printing_edition_1.printingEditionModel.find({}).populate("author_ids");
};
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
exports.userShowProductAsync = async function (startIndex, limit) {
    const totalPages = await authHelpers_1.resLengthCollection(limit);
    const printingEditionArr = await printing_edition_1.printingEditionModel.find({}, null, { skip: startIndex, limit: limit })
        .populate("author_ids");
    return { printingEditionArr, totalPages };
};
exports.userSortProduct = async ({ value, startIndex, limit }) => {
    const totalPages = await authHelpers_1.resLengthCollection(limit);
    let newArr = await printing_edition_1.printingEditionModel.find({}, null, { skip: startIndex, limit: limit })
        .populate("author_ids");
    console.log("value", value);
    console.log("startIndex", startIndex);
    console.log("limit", limit);
    const printingEditionArr = [...newArr];
    printingEditionArr.sort((a, b) => {
        if (value === 'default')
            return newArr;
        if (a.price < b.price)
            return value === 'up-sort' ? -1 : 1;
        if (a.price > b.price)
            return value === 'up-sort' ? 1 : -1;
        if (a.price === b.price)
            return 0;
    });
    return { printingEditionArr, totalPages };
};
//# sourceMappingURL=printingEditionsRepositories.js.map