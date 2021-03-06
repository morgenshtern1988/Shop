import {adminCreateProduct, adminRemoveProduct, adminUpdateProduct} from "../repositories/printingEditionsRepositories";
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

//5e6fe7206c82e932a0351ae8
export async function removeProduct(id: string) {
    adminRemoveProduct(id)
}

export async function updateProduct(printingEditions: any, id: string) {
    console.log(id);
    console.log(printingEditions);
    adminUpdateProduct(printingEditions, id);
}
