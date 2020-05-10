import * as express from "express"
import {printingEditionModel} from "../../../dataAccess/entityModels/printing-edition"
import {IPrintingEdition} from "../../../types/interface/printingEdition";
import {authorModel} from "../../../dataAccess/entityModels/authors";
//authMiddleware
export const adminShowProduct = async function (printingEdition: any) {
    return await printingEditionModel.find({}).populate("author_ids");
};

export const userShowProductAsync = async function (printingEdition: any) {
    const result = await printingEditionModel.find({}).populate("author_ids");
    return result
};

//authMiddleware
export const adminCreateProduct = async (printingEdition: IPrintingEdition) => {
    const result = await printingEditionModel.insertMany(printingEdition);
    // const result = printingEditionModel.find({});
    //получила книгу , нужно найти авторов по Ид с БД и добавить в ид products_ids ИД этой книги
    // const authors
    // const arrAuthor = printingEdition.author_ids[0];
    // printingEdition.author_ids.forEach((authorId: any) => {
    // console.log("Arr authors:", arrAuthor);
    // const a = await authorModel.findByIdAndUpdate(arrAuthor, {products_ids: [result._id]});
    // });
    // const printindID = result._id;
    // console.log("PrintingID:", result._id);
    // console.log("Res in DB:", a);
    /* await authorModel.find()
         .populate("product_id")
         .exec(
             function (err, author) {
                 console.log("author:", author);
                 console.log("ERR:", err);
                 // console.log(post[0].name);
             });*/
    return result;
};

export const adminRemoveProduct = async (id: string) => {
    // const printingEdition = await printingEditionModel.find({});
    const printingEdition = await printingEditionModel.findById(id);
    await printingEditionModel.remove(printingEdition);
    const refreshPrintingEditionInDB = await printingEditionModel.find({}).populate("author_ids");
    return refreshPrintingEditionInDB;
};

export const adminUpdateProduct = async (reqPrintingEditions: any, id: string) => {
    const printingEdition = await printingEditionModel.findById(id);
    await printingEditionModel.update(printingEdition, reqPrintingEditions)
};
