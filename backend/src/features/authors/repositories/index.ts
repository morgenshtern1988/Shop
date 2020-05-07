import {IAuthor} from "../api";
import {authorModel} from "../../../dataAccess/entityModels/authors";

export const adminCreateAuthor = async (author: IAuthor) => {
    return await authorModel.insertMany(author);
};
export const adminShowAuthor = async (author: any) => {
    return authorModel.find({});
};
export const adminRemoveAuthor = async (id: string) => {
    const authors = await authorModel.findById(id);
    await authorModel.remove(authors);
    return await authorModel.find({});
};
