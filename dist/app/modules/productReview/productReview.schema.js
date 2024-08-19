"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productReviewModel = void 0;
const mongoose_1 = require("mongoose");
const productReviewSchema = new mongoose_1.Schema({
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
});
exports.productReviewModel = (0, mongoose_1.model)("productReview", productReviewSchema);
