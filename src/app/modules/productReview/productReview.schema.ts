import { model, Schema } from "mongoose";
import { TProductReview } from "./productReview.interface";

const productReviewSchema = new Schema<TProductReview>({
    productId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    comment: {
        type: String,
        required: true
    },

})


export const productReviewModel = model<TProductReview>("productReview", productReviewSchema)