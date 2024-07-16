"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
exports.productValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().trim(),
        category: zod_1.z.string().trim(),
        description: zod_1.z.string().trim(),
        image: zod_1.z.array(zod_1.z.string()),
        price: zod_1.z.number().nonnegative(),
        inStock: zod_1.z.number().nonnegative(),
        productType: zod_1.z.enum(["special", "Special", "offerd"]),
    })
});
