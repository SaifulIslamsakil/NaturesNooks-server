"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoute = void 0;
const express_1 = __importDefault(require("express"));
const payment_controller_1 = require("./payment.controller");
const Route = express_1.default.Router();
Route.post("/create-payment-intregate", payment_controller_1.PyamentController.paymentIntregate);
exports.PaymentRoute = Route;
