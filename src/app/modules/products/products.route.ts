import express from "express"
import { ProductController } from "./products.controller"
import validateRequest from "../../midlewares/validateRequest"
import { productValidationSchema } from "./products.validation"

const Route = express.Router()

Route.post("/create-product", validateRequest(productValidationSchema), ProductController.createProducts)

Route.get("/", ProductController.getAllProduct)

export const ProductsRoute = Route