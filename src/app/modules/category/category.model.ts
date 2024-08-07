import { model, Schema } from "mongoose";
import { TCategory } from "./category.interface";


const categorySchema = new Schema<TCategory>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});



export const categoryModel = model<TCategory>("category", categorySchema)