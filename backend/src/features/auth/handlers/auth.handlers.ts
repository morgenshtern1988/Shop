import {Response, Request} from "express";
import {createUser, loginUser} from "../services/auth.services";

export const registerUser = async (request: Request, response: Response) => {
    createUser(request.body)
        .then(user => response.json(user))
        .catch(err => response.json(err))
};

export const authenticateUser = async (request: Request, response: Response) => {
    loginUser(request.body)
        .then(user => response.json(user))
        .catch(err => response.json(err))
};
