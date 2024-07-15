"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoute = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const validateRequest_1 = __importDefault(require("../../midlewares/validateRequest"));
const products_validation_1 = require("./products.validation");
const Route = express_1.default.Router();
Route.post("/create-product", (0, validateRequest_1.default)(products_validation_1.productValidationSchema), products_controller_1.ProductController.createProducts);
exports.ProductsRoute = Route;
