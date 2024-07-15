import { model, Schema } from "mongoose";
import { TProduct } from "./products.interface";

const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    inStock: {
        type: Number,
        required: true,
        min: 0
    },
    productType: {
        type: String,
        enum: ["special", "Special", "offerd"],
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export const productModel = model<TProduct>("product", productSchema)
