import { Router } from "express";
import {adminCreateProduct, adminShowProduct} from "./repositories/printingEditionsRepositories";

export const adminProductRouter = Router();

//authMiddleware
adminProductRouter.get("/", adminShowProduct);

//добавить authMiddleware (токены)
adminProductRouter.post("/create", adminCreateProduct );