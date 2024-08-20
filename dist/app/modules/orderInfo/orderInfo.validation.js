"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInfoValidationSchema = void 0;
const zod_1 = require("zod");
const ProductDataSchema = zod_1.z.object({
    id: zod_1.z.string(),
    quantity: zod_1.z.number().int()
});
exports.OrderInfoValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        address: zod_1.z.string(),
        state: zod_1.z.string(),
        city: zod_1.z.string(),
        zipCode: zod_1.z.string(),
        cardNumber: zod_1.z.string(),
        phoneNumber: zod_1.z.string(),
        date: zod_1.z.string(),
        cvv: zod_1.z.string(),
        productData: zod_1.z.array(ProductDataSchema)
    })
});
