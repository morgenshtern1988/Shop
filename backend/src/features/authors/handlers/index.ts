import {Request, Response} from "express";
import {createAuthor, showAuthor} from "../services";

export const adminCreateAuthor = async (request: Request, response: Response): Promise<any> => {
    createAuthor(request.body)
        .then((author: any) => response.json(author))
        .catch((err: any) => response.json(err));
};

export const adminShowAuthor = async (request: Request, response: Response): Promise<any> => {
    showAuthor(request.body)
        .then((author: any) => response.json(author))
        .catch((err) => response.json(err));
};
