import { z } from "zod";

// Define the Zod schema for the product with custom error messages
export const productValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, { message: "Name is required" }),
        category: z.string().min(1, { message: "Category is required" }),
        description: z.string().min(1, { message: "Description is required" }),
        image: z.array(z.string().url({ message: "Each image must be a valid URL" })).nonempty({ message: "At least one image is required" }),
        price: z.number().positive({ message: "Price must be a positive number" }),
        inStock: z.number().int({ message: "In-stock quantity must be an integer" }).nonnegative({ message: "In-stock quantity must be a non-negative number" }),
        isDeleted: z.boolean().default(false),
    })
});


