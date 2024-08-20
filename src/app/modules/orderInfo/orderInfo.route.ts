import express  from "express";
import validateRequest from "../../midlewares/validateRequest";
import { OrderInfoValidationSchema } from "./orderInfo.validation";
import { OrderController } from "./orderInfo.controller";


const Route = express.Router()

Route.post("/create-Order", validateRequest(OrderInfoValidationSchema), OrderController.createOrderInfo)

export const OrderRoute = Route