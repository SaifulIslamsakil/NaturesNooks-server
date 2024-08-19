"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentValidation = void 0;
const zod_1 = require("zod");
const paymentValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty("Name is required."),
    email: zod_1.z.string().email("Invalid email format."),
    address: zod_1.z.string().nonempty("Address is required."),
    city: zod_1.z.string().nonempty("City is required."),
    state: zod_1.z.string().nonempty("State is required."),
    zipeCord: zod_1.z.number().int("Zip code must be an integer.")
});
exports.PaymentValidation = {
    paymentValidationSchema
};
