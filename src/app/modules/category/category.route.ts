import express from "express"
import validateRequest from "../../midlewares/validateRequest"
import { categoryValidationSchema } from "./category.validation"
import { CaregoryController } from "./category.controller"

const Route = express.Router()
Route.post("/create-category", validateRequest(categoryValidationSchema),CaregoryController.createCategory)
Route.get("/", CaregoryController.getAllCategory)

export const CategoryRoute = Route