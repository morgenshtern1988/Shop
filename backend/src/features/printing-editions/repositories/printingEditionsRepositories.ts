import * as express from "express"
import {printingEditionModel} from "../../../dataAccess/entityModels/printing-edition"
import {IPrintingEdition} from "../../../types/interface/printingEdition";
//authMiddleware
export const adminShowProduct = async function (printingEdition: any) {
    const result = printingEditionModel.find({});
    return result
};

export const userShowProductAsync = async function (printingEdition: any) {
    const result = printingEditionModel.find({});
    return result
};

//authMiddleware
export const adminCreateProduct = async (printingEdition: IPrintingEdition) => {
    const result = await printingEditionModel.insertMany(printingEdition);
    return result;
};

export const adminRemoveProduct = async (id: string) => {
    // const printingEdition = await printingEditionModel.find({});
    const printingEdition = await printingEditionModel.findById(id);
    await printingEditionModel.remove(printingEdition);
    const refreshPrintingEditionInDB = await printingEditionModel.find({});
    return refreshPrintingEditionInDB;
};

export const adminUpdateProduct = async (reqPrintingEditions: any, id: string) => {
    const printingEdition = await printingEditionModel.findById(id);
    await printingEditionModel.update(printingEdition, reqPrintingEditions)
};
