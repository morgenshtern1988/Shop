import {
    adminCreateProduct,
    adminRemoveProduct,
    adminUpdateProduct,
    userShowProductAsync
} from "../repositories/printingEditionsRepositories";
import {IPrintingEdition} from "../../../types/interface/printingEdition";
import {adminShowProduct} from "../repositories/printingEditionsRepositories";

export async function createProduct(printingEdition: IPrintingEdition) {
    if (printingEdition === null) {
        return "some field is null"
    } else {
        return await adminCreateProduct(printingEdition)
    }
}

export async function showProduct(printingEditions: any) {
    if (printingEditions === null) {
        return "Error"
    } else {
        return await adminShowProduct(printingEditions)
    }
}

export async function userShowProduct(printingEditions: any) {
    if (printingEditions === null) {
        return "Error"
    } else {
        return await userShowProductAsync(printingEditions)
    }
}

export async function removeProduct(id: string) {
   return adminRemoveProduct(id)
}

export async function updateProduct(printingEditions: any, id: string) {
    console.log(id);
    console.log(printingEditions);
  return adminUpdateProduct(printingEditions, id);
}
