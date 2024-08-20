import { model, Schema } from "mongoose";
import { TOrderInfo } from "./orderInfo.interface";


const ProductDataSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const OrderInfoSchema = new Schema<TOrderInfo>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    totalPrice : {
        type :Number,
        require:true
    },
    totalItem : {
        type :Number,
        require:true
    },
    productData: [ProductDataSchema]
});

export const OrderInfoModel = model<TOrderInfo>('OrderInfo', OrderInfoSchema);
 