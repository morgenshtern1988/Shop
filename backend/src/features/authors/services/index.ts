import {adminCreateAuthor, adminRemoveAuthor, adminShowAuthor} from "../repositories";
import {IAuthor} from "../api";

export async function createAuthor(author: IAuthor) {
    if (author === null) {
        return "some field is null"
    } else {
        return await adminCreateAuthor(author)
    }
}

export const showAuthor = async () => {
    return await adminShowAuthor()
};

export const removeAuthor = async (id: any) => {
    return adminRemoveAuthor(id)
};
