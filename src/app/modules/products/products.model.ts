import { model, Schema } from "mongoose";
import { TProduct } from "./products.interface";


const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: [{
        type: String,
        required: true,
    }],
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Number,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

export const productModel= model("product", productSchema)
