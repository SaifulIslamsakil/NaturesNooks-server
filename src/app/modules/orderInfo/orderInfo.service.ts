import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { productModel } from "../products/products.model";
import { TOrderInfo } from "./orderInfo.interface";
import { OrderInfoModel } from "./orderInfo.schema";

const createOrderInfoIntoDB = async (payload: TOrderInfo) => {
    const { productData } = payload
    console.log(payload)
    for (const product of productData) {
        const productUpdate = await productModel.findOneAndUpdate({ _id: product.id }, { $inc: { inStock: -product.quantity } }, { new: true })
        if (!productUpdate) {
            throw new AppError(httpStatus.BAD_REQUEST, "Product is not Exists")
        }
    }

    const result = await OrderInfoModel.create(payload)
    return result

}


export const OrderInfoService = {
    createOrderInfoIntoDB
}