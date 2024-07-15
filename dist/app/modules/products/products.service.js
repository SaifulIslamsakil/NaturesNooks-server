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
exports.ProductServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../builders/QueryBuilder"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const products_model_1 = require("./products.model");
const createProductsIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield products_model_1.productModel.create(payload);
    return product;
});
const getAllProductFormDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const initialQuery = products_model_1.productModel.find();
    const getProduct = new QueryBuilder_1.default(initialQuery, payload)
        .search(['name', 'category', 'description'])
        .filter()
        .sort()
        .paginate();
    const result = yield getProduct.modelQuery;
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "data is not recived");
    }
    return result;
});
const getSingelProductInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = products_model_1.productModel.findById(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "data is not recived");
    }
    return result;
});
exports.ProductServices = {
    createProductsIntoDB,
    getAllProductFormDB,
    getSingelProductInDB
};
