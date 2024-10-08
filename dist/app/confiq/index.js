"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confiq = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(({ path: path_1.default.join(process.cwd(), ".env") }));
exports.confiq = {
    Port: process.env.PORT,
    Database_url: process.env.DATABASE_URL,
    Node_Env: process.env.NODE_ENV,
    Stripe_Scrict_key: process.env.STRIPE_SCRICT_KEY
};
