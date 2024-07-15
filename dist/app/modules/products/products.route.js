"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoute = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const Route = express_1.default.Router();
Route.get("/create-product", products_controller_1.ProductController.createProducts);
exports.ProductsRoute = Route;
