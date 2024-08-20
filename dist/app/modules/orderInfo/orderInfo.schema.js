"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInfo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProductDataSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});
const OrderInfoSchema = new mongoose_1.default.Schema({
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
exports.OrderInfo = mongoose_1.default.model('OrderInfo', OrderInfoSchema);
