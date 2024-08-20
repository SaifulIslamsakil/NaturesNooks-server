import mongoose from 'mongoose';

const ProductDataSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const OrderInfoSchema = new mongoose.Schema({
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
        type: Number,
        required: true
    },
    cardNumber: {
        type: Number,
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
        type: Number,
        required: true
    },
    productData: [ProductDataSchema]
});

export const OrderInfo = mongoose.model('OrderInfo', OrderInfoSchema);
 