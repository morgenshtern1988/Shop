import {NextFunction, Request, Response} from "express";
import {getOrdersServices, orderServices} from "../services";

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    await orderServices(req.body)
        .then((err) => res.json(err))
        .catch(err => next(err));
};

export const getOrders = async (req: Request, res: Response, next: NextFunction) => {
    await getOrdersServices(req.body)
        .then((err) => res.json(err))
        .catch(err => next(err));
};

