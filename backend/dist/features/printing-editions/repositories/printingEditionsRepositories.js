"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printing_edition_1 = require("../../../dataAccess/entityModels/printing-edition");
//authMiddleware
exports.adminShowProduct = async function (printingEdition) {
    const result = printing_edition_1.printingEditionModel.find({});
    return result;
};
//authMiddleware
exports.adminCreateProduct = async (printingEdition) => {
    const result = await printing_edition_1.printingEditionModel.insertMany(printingEdition);
    return result;
};
exports.adminRemoveProduct = async (id) => {
    // const printingEdition = await printingEditionModel.find({});
    const printingEdition = await printing_edition_1.printingEditionModel.findById(id);
    await printing_edition_1.printingEditionModel.remove(printingEdition);
};
exports.adminUpdateProduct = async (reqPrintingEditions, id) => {
    const printingEdition = await printing_edition_1.printingEditionModel.findById(id);
    await printing_edition_1.printingEditionModel.update(printingEdition, reqPrintingEditions);
};
//# sourceMappingURL=printingEditionsRepositories.js.map