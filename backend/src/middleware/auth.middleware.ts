import {Response, Request, NextFunction} from "express";
import * as jwt from "jsonwebtoken";
import appJwt from "../config/app";

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const {authorization: authToken} = req.headers;
    // console.log(req.headers);
    console.log(authToken);
    // if(!authToken) return res.status(401).send("no token provider");
    // jwt.verify(authToken,appJwt.jwt.secret, (err,decodet)=>{
    //     if(err)return res.status(401).send(err);
    //     req["userInfo"] = decodet;
    next();
    // })
};
