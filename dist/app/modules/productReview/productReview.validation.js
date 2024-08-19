"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productReviewValidationSchema = void 0;
const zod_1 = require("zod");
exports.productReviewValidationSchema = zod_1.z.object({
    productId: zod_1.z.string().min(1, 'Product ID is required'),
    rating: zod_1.z.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
    userName: zod_1.z.string().min(1, 'User name is required'),
    verified: zod_1.z.boolean(),
    comment: zod_1.z.string().optional(),
    images: zod_1.z.array(zod_1.z.string().url().optional())
});
