import httpStatus from "http-status"
import AppError from "../../error/AppError"
import { TProductReview } from "./productReview.interface"
import { productReviewModel } from "./productReview.schema"


const createProductReviewInToDB = async (payload: TProductReview) => {
    const result = await productReviewModel.create(payload)
    return result

}

const getProductReviewFormDB = async (id: string) => {
    const result = await productReviewModel.findById(id)
    if (!result) {
        throw new AppError(httpStatus.BAD_REQUEST, "This Product Is Not Review")
    }
    return result
}


export const productReviewService = {
    createProductReviewInToDB,
    getProductReviewFormDB
}