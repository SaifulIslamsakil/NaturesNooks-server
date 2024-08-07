"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
        enum: ["special", "featured", "offerd"],
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.productModel = (0, mongoose_1.model)("product", productSchema);
