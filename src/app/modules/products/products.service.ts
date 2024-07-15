import httpStatus from "http-status";
import QueryBuilder from "../../builders/QueryBuilder";
import AppError from "../../error/AppError";
import { TProduct } from "./products.interface";
import { productModel } from "./products.model";


const createProductsIntoDB = async (payload: TProduct) => {
    const product = await productModel.create(payload)
    return product
}

const getAllProductFormDB = async (payload: Record<string, unknown>) => {
    const initialQuery = productModel.find()
    const getProduct = new QueryBuilder(initialQuery, payload)
        .search(['name', 'category', 'description'])
        .filter()
        .sort()
        .paginate()
    const result = await getProduct.modelQuery
    if (!result) {
        throw new AppError(httpStatus.BAD_REQUEST, "data is not recived")
    }
    return result
}

const getSingelProductInDB = async (id: string) => {
    const result = productModel.findById(id)
    if (!result) {
        throw new AppError(httpStatus.BAD_REQUEST, "data is not recived")
    }

    return result
}


export const ProductServices = {
    createProductsIntoDB,
    getAllProductFormDB,
    getSingelProductInDB
}