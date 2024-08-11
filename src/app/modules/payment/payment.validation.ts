import { z } from "zod";

const paymentValidationSchema = z.object({
    name: z.string().nonempty("Name is required."),
    email: z.string().email("Invalid email format."),
    address: z.string().nonempty("Address is required."),
    city: z.string().nonempty("City is required."),
    state: z.string().nonempty("State is required."),
    zipeCord: z.number().int("Zip code must be an integer.")
});


export const PaymentValidation = {
    paymentValidationSchema
}