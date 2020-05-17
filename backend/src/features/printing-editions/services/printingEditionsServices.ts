import {
    adminCreateProduct,
    adminRemoveProduct,
    adminUpdateProduct,
    userShowProductAsync
} from "../repositories/printingEditionsRepositories";
import {IPrintingEdition} from "../../../types/interface/printingEdition";
import {adminShowProduct} from "../repositories/printingEditionsRepositories";
import paginate from "jw-paginate";

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
    // const printingEdition = await userShowProductAsync({query});
    // console.log("length:", printingEdition.length);
    // номер страницы которая переданая через /printing-edition?page=2
    const page = parseInt(query.page) || 1;
    console.log("PAGE:", page);
    // get pager object for specified page
    const pageSize = 6;
    const pager = paginate(10, 1, 5, 10);
    console.log("наканецта! ")
    console.log("PAGER:", pager)
    // return pager
    // get page of items from items array
    // const pageOfItems = printingEdition.slice(pager.startIndex, pager.endIndex + 1);
    // return pager object and current page of items
    // return {a: name}
    // return {pager, pageOfItems};

}

