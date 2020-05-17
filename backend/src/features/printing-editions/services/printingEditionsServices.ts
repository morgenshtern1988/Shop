import {
    adminCreateProduct,
    adminRemoveProduct,
    adminUpdateProduct,
    userShowProductAsync
} from "../repositories/printingEditionsRepositories";
import {IPrintingEdition} from "../../../types/interface/printingEdition";
import {adminShowProduct} from "../repositories/printingEditionsRepositories";
import {printingEditionModel} from "../../../dataAccess/entityModels/printing-edition";

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
    const limit = 3;
    let currentPage = query.page;

    if (currentPage < 1) {
        currentPage = 1;
    }

    const startIndex = limit * (currentPage - 1);
    return await userShowProductAsync(startIndex, limit);
};

