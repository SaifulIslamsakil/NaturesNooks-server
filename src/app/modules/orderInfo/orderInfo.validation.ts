

import { z } from 'zod';

const ProductDataSchema = z.object({
    id: z.string(),
    quantity: z.number().int()
});

export const OrderInfoValidationSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    address: z.string(),
    state: z.string(),
    city: z.string(),
    zipCode: z.number().int(),
    cardNumber: z.number().int(),
    phoneNumber: z.string(),
    date: z.string(),
    cvv: z.number().int(),
    productData: z.array(ProductDataSchema)
});

export type TOrderInfo = z.infer<typeof OrderInfoValidationSchema>;
