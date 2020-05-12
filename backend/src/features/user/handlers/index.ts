import {Response, Request, NextFunction} from "express";
import {showUser} from "../services";

export const adminShowUser = async (req: Request, res: Response) => {
    showUser()
        .then((userArr) => res.json(userArr))
        .catch((err) => res.json(err))
};
