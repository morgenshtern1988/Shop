import {Request, Response} from "express";
import {createAuthor} from "../services";

export const adminCreateAuthor = async (request: Request, response: Response): Promise<any> => {
    createAuthor(request.body)
        .then((author: any) => response.json(author))
        .catch((err: any) => response.json(err));
};

