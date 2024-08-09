import { z } from "zod";


export const productValidationSchema = z.object({
    body:z.object({
        name: z.string().trim(),
        category: z.string().trim(),
        description: z.string().trim(),
        image: z.array(z.string()),
        price: z.number().nonnegative(),
        inStock: z.number().nonnegative(),
        productType: z.enum(["special", "featured", "offerd"]),
    })
});


