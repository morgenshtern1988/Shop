import {Request, Response, NextFunction, query} from "express";
import {
    createProduct,
    removeProduct,
    showProduct, sortOnCategory, sortProduct,
    updateProduct,
    userShowProduct
} from "../services/printingEditionsServices"

export const adminShowProduct = async function (request: Request, response: Response) {
    showProduct(request.query)
        .then((printingEdition: any) => response.json(printingEdition))
        .catch((err) => response.json(err))
};

export const adminCreateProduct = async (request: Request, response: Response): Promise<any> => {
    createProduct(request.body)
        .then((printingEdition: any) => response.json(printingEdition))
        .catch((err: any) => response.json(err));
};

export const adminRemoveProduct = async (request: Request, response: Response) => {
    const id = request.params.id;
    removeProduct(id)
        .then((printingEdition: any) => response.json(printingEdition))
        .catch((err: any) => response.json(err))
};

export const adminUpdateProduct = async (request: Request, response: Response) => {
    const id = request.params.id;
    updateProduct(request.body, id)
        .then((printingEdition: any) => response.json(printingEdition))
        .catch((err: any) => response.json(err))
};

export const userShowProductAsync = async (request: Request, response: Response) => {
    userShowProduct(request.query)
        .then((printingEdition: any) => response.json(printingEdition))
        .catch((err) => response.json(err))
};

export const userSortProduct = async (req: Request, res: Response) => {
    sortProduct({value: req.body, query: req.query})
        .then((printingEdition: any) => res.json(printingEdition))
        .catch((err) => res.json(err))
};

export const userSortCategory = async (req: Request, res: Response) => {
    sortOnCategory({sortParam: req.body, query: req.query})
        .then((printingEdition: any) => res.json(printingEdition))
        .catch((err) => res.json(err))
};
