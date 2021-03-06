import {Request, Response, NextFunction} from "express";
import {createProduct, removeProduct, showProduct, updateProduct} from "../services/printingEditionsServices"

export const adminShowProduct = async function (request: Request, response: Response) {
    showProduct(request.body)
        .then((printingEdition) => response.json(printingEdition))
        .catch((err) => response.json(err))
};

//authMiddleware
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
}
