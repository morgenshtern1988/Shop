import {Request, Response} from "express";
import {createAuthor, removeAuthor, showAuthor} from "../services";

export const adminCreateAuthor = async (request: Request, response: Response): Promise<any> => {
    createAuthor(request.body)
        .then((author: any) => response.json(author))
        .catch((err: any) => response.json(err));
};

export const adminShowAuthor = async (request: Request, response: Response): Promise<any> => {
    showAuthor()
        .then((author: any) => response.json(author))
        .catch((err) => response.json(err));
};

export const adminRemoveAuthor = async (request: Request, response: Response): Promise<any> => {
    const id = request.params.id;
    removeAuthor(id)
        .then((author: any) => response.json(author))
        .catch((err) => response.json(err));
}
