import {printingEditionModel} from "../../../dataAccess/entityModels/printing-edition"
import {IPrintingEdition} from "../../../types/interface/printingEdition";
import {authorModel} from "../../../dataAccess/entityModels/authors";
import {resLengthCollection} from "../../../helpers/authHelpers";

export const adminShowProduct = async function () {
    return printingEditionModel.find({}).populate("author_ids");
};

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


export const userShowProductAsync = async function (startIndex: number, limit: number) {
    let param = {};
    const totalPages = await resLengthCollection({limit, param});
    const printingEditionArr = await printingEditionModel.find(param, null, {skip: startIndex, limit: limit})
        .populate("author_ids");
    return {printingEditionArr, totalPages}
};

export const userSortProduct = async ({value: target, startIndex, limit}: any) => {
    let param = {};
    const totalPages = await resLengthCollection({limit, param});
    let printingEditionArr = await printingEditionModel.find(param).populate("author_ids");
    printingEditionArr.sort((a: any, b: any): any => {
        if (target.value === 'default') return printingEditionArr;
        if (a.price < b.price) return target.value === 'up-sort' ? -1 : 1;
        if (a.price > b.price) return target.value === 'up-sort' ? 1 : -1;
        if (a.price === b.price) return 0;
    });
    printingEditionArr = printingEditionArr.splice(startIndex, limit);
    return {printingEditionArr, totalPages}
};

export const userSortCategory = async ({startIndex, limit, type: types}: any) => {
    const myType = Object.keys(types);
    console.log("my tyoe:", myType);
    console.log("staetIndex:", startIndex);
    console.log("limit:", limit);
    let param = {type: myType[0]};
    const totalPages = await resLengthCollection({limit, param});
    let printingEditionArr = await printingEditionModel.find(param)
        .populate("author_ids");
    printingEditionArr = printingEditionArr.splice(startIndex, limit);
    return {printingEditionArr, totalPages}
};
