"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../midlewares/validateRequest"));
const orderInfo_validation_1 = require("./orderInfo.validation");
const orderInfo_controller_1 = require("./orderInfo.controller");
const Route = express_1.default.Router();
Route.post("/create-order", (0, validateRequest_1.default)(orderInfo_validation_1.OrderInfoValidationSchema), orderInfo_controller_1.OrderController.createOrderInfo);
exports.OrderRoute = Route;
