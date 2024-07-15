"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_route_1 = require("../modules/products/products.route");
const category_route_1 = require("../modules/category/category.route");
const Router = express_1.default.Router();
const moduleRoute = [
    {
        path: "/product",
        Route: products_route_1.ProductsRoute
    },
    {
        path: "/category",
        Route: category_route_1.CategoryRoute
    },
];
moduleRoute.forEach(route => Router.use(route.path, route.Route));
exports.default = Router;
