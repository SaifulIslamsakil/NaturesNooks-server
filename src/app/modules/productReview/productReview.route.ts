import  express from "express"
import validateRequest from "../../midlewares/validateRequest"
import { productReviewValidationSchema } from "./productReview.validation"
import { productReviewController } from "./productReview.controller"

const Route = express.Router()

Route.post("/create-review", validateRequest(productReviewValidationSchema), productReviewController.createProductReview)
Route.post("/:id", productReviewController.getProductReview)

export const productReviewRoute = Route