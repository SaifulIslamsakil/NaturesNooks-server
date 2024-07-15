import express from "express"
import { ProductController } from "./products.controller"

const Route = express.Router()

Route.get("/create-product",ProductController.createProducts)

export const ProductsRoute = Route