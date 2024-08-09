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
    const result = await productModel.findById(id)
    if (!result) {
        throw new AppError(httpStatus.BAD_REQUEST, "data is not recived")
    }

    return result
}

const productDeleteIntoDB = async (id: string) => {
    const productData = await productModel.findByIdAndDelete(id)
    return productData
}

const productUpdateIntoDB = async (payload: TProduct, id: string) => {
    const product = await productModel.findById(id)
    if (!product) {
        throw new AppError(httpStatus.BAD_REQUEST, "product is not exists")
    }
    const updatedProduct = await productModel.findByIdAndUpdate(id, payload, {
        new: true
    })
    if (!updatedProduct) {
        throw new AppError(httpStatus.BAD_REQUEST, "product is not updated")
    }

    return updatedProduct
}


export const ProductServices = {
    createProductsIntoDB,
    getAllProductFormDB,
    getSingelProductInDB,
    productDeleteIntoDB,
    productUpdateIntoDB
}