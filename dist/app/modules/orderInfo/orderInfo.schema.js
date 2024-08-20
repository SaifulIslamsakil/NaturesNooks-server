"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInfoModel = void 0;
const mongoose_1 = require("mongoose");
const ProductDataSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});
const OrderInfoSchema = new mongoose_1.Schema({
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
    totalPrice: {
        type: Number,
        require: true
    },
    totalItem: {
        type: Number,
        require: true
    },
    productData: [ProductDataSchema]
});
exports.OrderInfoModel = (0, mongoose_1.model)('OrderInfo', OrderInfoSchema);
