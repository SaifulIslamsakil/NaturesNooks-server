"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const handelZodError_1 = __importDefault(require("../error/handelZodError"));
const handleMongooseValidationError_1 = __importDefault(require("../error/handleMongooseValidationError"));
const handeMongooseCastError_1 = __importDefault(require("../error/handeMongooseCastError"));
const handelMongooseDuplicateError_1 = __importDefault(require("../error/handelMongooseDuplicateError"));
const AppError_1 = __importDefault(require("../error/AppError"));
const confiq_1 = require("../confiq");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalErrorHandling = (err, req, res, next) => {
    let statusCode = 500;
    let message = err.message || 'Something went wrong!';
    let errorSources = [
        {
            path: "",
            message: ""
        }
    ];
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handelZodError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        const simplifiedError = (0, handleMongooseValidationError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        const simplifiedError = (0, handeMongooseCastError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        const simplifiedError = (0, handelMongooseDuplicateError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err === null || err === void 0 ? void 0 : err.message;
        errorSources = [{
                path: '',
                message: err === null || err === void 0 ? void 0 : err.message,
            }];
    }
    else if (err instanceof Error) {
        message = err === null || err === void 0 ? void 0 : err.message;
        errorSources = [{
                path: '',
                message: err === null || err === void 0 ? void 0 : err.message,
            }];
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack: confiq_1.confiq.Node_Env === 'development' ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
exports.default = globalErrorHandling;
