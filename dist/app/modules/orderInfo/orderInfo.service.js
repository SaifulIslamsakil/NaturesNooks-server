"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInfoService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const products_model_1 = require("../products/products.model");
const orderInfo_schema_1 = require("./orderInfo.schema");
const createOrderInfoIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { productData } = payload;
    console.log(payload);
    for (const product of productData) {
        const productUpdate = yield products_model_1.productModel.findOneAndUpdate({ _id: product.id }, { $inc: { inStock: -product.quantity } }, { new: true });
        if (!productUpdate) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Product is not Exists");
        }
    }
    const result = yield orderInfo_schema_1.OrderInfoModel.create(payload);
    return result;
});
exports.OrderInfoService = {
    createOrderInfoIntoDB
};
