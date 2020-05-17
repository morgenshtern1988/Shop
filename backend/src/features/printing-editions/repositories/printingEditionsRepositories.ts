import {printingEditionModel} from "../../../dataAccess/entityModels/printing-edition"
import {IPrintingEdition} from "../../../types/interface/printingEdition";
import {authorModel} from "../../../dataAccess/entityModels/authors";
import {resLengthCollection} from "../../../helpers/authHelpers";

export const adminShowProduct = async function () {
    return printingEditionModel.find({}).populate("author_ids");
};

export const userShowProductAsync = async function (startIndex: number, limit: number) {
    const totalPages = await resLengthCollection();
    console.log("length:", totalPages);
    const printingEditionArr = await printingEditionModel.find({}, null, {skip: startIndex, limit: limit})
        .populate("author_ids");
    return {printingEditionArr, totalPages}
};

//authMiddleware
export const adminCreateProduct = async (printingEdition: IPrintingEdition) => {
    const result = await printingEditionModel.create(printingEdition);
    const arrIdAuthors = printingEdition.author_ids;
    const idProduct = result._id;
    arrIdAuthors.forEach((id: any) => {
        updateAuthor({id, idProduct})
    });
    return result;
};
const updateAuthor = async ({id, idProduct}: any) => {
    let productArr = await authorModel.findById(id);
    productArr.product_ids.push(idProduct);
    await authorModel.findByIdAndUpdate(id, {product_ids: productArr.product_ids});
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
