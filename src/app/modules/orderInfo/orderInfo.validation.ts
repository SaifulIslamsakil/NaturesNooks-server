

import { z } from 'zod';

const ProductDataSchema = z.object({
    id: z.string(),
    quantity: z.number().int()
});

export const OrderInfoValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
        address: z.string(),
        state: z.string(),
        city: z.string(),
        zipCode: z.string(),
        cardNumber: z.string(),
        phoneNumber: z.string(),
        date: z.string(),
        cvv: z.string(),
        productData: z.array(ProductDataSchema)
    })
});

