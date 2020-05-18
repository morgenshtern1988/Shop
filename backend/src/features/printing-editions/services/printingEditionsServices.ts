import {
    adminCreateProduct,
    adminRemoveProduct,
    adminUpdateProduct,
    userShowProductAsync, userSortCategory, userSortProduct
} from "../repositories/printingEditionsRepositories";
import {IPrintingEdition} from "../../../types/interface/printingEdition";
import {adminShowProduct} from "../repositories/printingEditionsRepositories";
import {printingEditionModel} from "../../../dataAccess/entityModels/printing-edition";
import {paramPagination} from "../../../helpers/authHelpers";

export async function createProduct(printingEdition: IPrintingEdition) {
    if (printingEdition === null) {
        return "some field is null"
    } else {
        return await adminCreateProduct(printingEdition)
    }
}

export async function showProduct() {
    return await adminShowProduct()
}


export async function removeProduct(id: string) {
    return adminRemoveProduct(id)
}

export async function updateProduct(printingEditions: any, id: string) {
    // console.log(id);
    // console.log(printingEditions);
    return adminUpdateProduct(printingEditions, id);
}

export const userShowProduct = async (query: any) => {

    let pagination = paramPagination(query);
    const {startIndex, currentPage, limit} = pagination;

    const res = await userShowProductAsync(startIndex, limit);
    return {...res, currentPage: currentPage}
};

export const sortProduct = async ({value, query}: any) => {
    let pagination = paramPagination(query);
    const {startIndex, currentPage, limit} = pagination;
    // console.log(value, query, startIndex, currentPage, limit);
    const res = await userSortProduct({value, startIndex, limit});
    return {...res, currentPage: currentPage}
};

export const sortOnCategory = async ({sortParam, query}: any) => {
    let type = {...sortParam.type};
    let pagination = paramPagination(query);
    const {startIndex, currentPage, limit} = pagination;
    const res = await userSortCategory({startIndex, limit, type});
    return {...res, currentPage: currentPage}
};
