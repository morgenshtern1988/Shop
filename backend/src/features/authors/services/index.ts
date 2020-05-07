import {adminCreateAuthor} from "../repositories";
import {IAuthor} from "../api";

export async function createAuthor(author: IAuthor) {
    if (author === null) {
        return "some field is null"
    } else {
        return await adminCreateAuthor(author)
    }
}
