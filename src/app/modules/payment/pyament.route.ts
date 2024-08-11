import express from "express"
import { PyamentController } from "./payment.controller"


const Route = express.Router()

Route.post("/create-payment-intregate", PyamentController.paymentIntregate)


export const PaymentRoute = Route