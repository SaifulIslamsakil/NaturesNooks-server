"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_route_1 = require("../modules/products/products.route");
const Router = express_1.default.Router();
const moduleRoute = [
    {
        path: "/product",
        Route: products_route_1.ProductsRoute
    },
];
moduleRoute.forEach(route => Router.use(route.path, route.Route));
exports.default = Router;
