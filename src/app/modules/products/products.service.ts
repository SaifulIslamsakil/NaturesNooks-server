import QueryBuilder from "../../builders/QueryBuilder";
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
    return result
}


export const ProductServices = {
    createProductsIntoDB,
    getAllProductFormDB
}