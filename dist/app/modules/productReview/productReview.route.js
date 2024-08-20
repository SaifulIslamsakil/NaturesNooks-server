"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productReviewRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../midlewares/validateRequest"));
const productReview_validation_1 = require("./productReview.validation");
const productReview_controller_1 = require("./productReview.controller");
const Route = express_1.default.Router();
Route.post("/create-review", (0, validateRequest_1.default)(productReview_validation_1.productReviewValidationSchema), productReview_controller_1.productReviewController.createProductReview);
Route.get("/:id", productReview_controller_1.productReviewController.getProductReview);
exports.productReviewRoute = Route;
