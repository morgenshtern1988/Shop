import * as express from "express"
import { Router } from "express";
import { printingEditionModel } from "../../../dataAccess/entityModels/printing-edition"
export const adminProductRouter = Router();

//authMiddleware
export const adminShowProduct = async function (request:express.Request, response:express.Response) {
    printingEditionModel.find({}).then((printingEdition) => response.send(printingEdition))
}


//authMiddleware
export const adminCreateProduct= async (request:express.Request, response:express.Response): Promise<any> => {
    if (!request.body) return response.sendStatus(400);
    const printingEdition = request.body;
    await printingEditionModel.insertMany(printingEdition, function (err: any, result: any) {
        response.send(printingEdition);
    });
}