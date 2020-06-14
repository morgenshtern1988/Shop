import {NextFunction, Request, Response} from "express";
import {orderServices} from "../services";

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    orderServices(req.body)
        .then((err) => res.json(err))
        .catch(err => next(err));
};
