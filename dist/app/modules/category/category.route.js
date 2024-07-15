"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../midlewares/validateRequest"));
const category_validation_1 = require("./category.validation");
const category_controller_1 = require("./category.controller");
const Route = express_1.default.Router();
Route.post("/create-category", (0, validateRequest_1.default)(category_validation_1.categoryValidationSchema), category_controller_1.CaregoryController.createCategory);
Route.get("/", category_controller_1.CaregoryController.getAllCategory);
exports.CategoryRoute = Route;
