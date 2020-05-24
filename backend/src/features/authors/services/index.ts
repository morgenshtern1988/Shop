import {adminCreateAuthor, adminRemoveAuthor, adminShowAuthor} from "../repositories";
import {IAuthor} from "../api";
import {paramPagination} from "../../../helpers/authHelpers";
import {adminShowProduct} from "../../printing-editions/repositories/printingEditionsRepositories";

export async function createAuthor(author: IAuthor) {
    if (author === null) {
        return "some field is null"
    } else {
        return await adminCreateAuthor(author)
    }
}

export const showAuthor = async (query: any) => {
    let pagination = paramPagination(query);
    const {startIndex, currentPage, limit} = pagination;
    const res = await adminShowAuthor(startIndex, limit);
    return {...res, currentPage: currentPage}
};

export const removeAuthor = async (id: any) => {
    return adminRemoveAuthor(id)
};
