"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
// Define the Zod schema for the product with custom error messages
exports.productValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name is required" }),
        category: zod_1.z.string().min(1, { message: "Category is required" }),
        description: zod_1.z.string().min(1, { message: "Description is required" }),
        image: zod_1.z.array(zod_1.z.string().url({ message: "Each image must be a valid URL" })).nonempty({ message: "At least one image is required" }),
        price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
        inStock: zod_1.z.number().int({ message: "In-stock quantity must be an integer" }).nonnegative({ message: "In-stock quantity must be a non-negative number" }),
        isDeleted: zod_1.z.boolean().default(false),
    })
});
