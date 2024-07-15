import { TProduct } from "./products.interface";
import { productModel } from "./products.model";


const createProductsIntoDB = async (payload: TProduct) => {
    console.log(payload);
    
    const product = await productModel.create(payload)
    return product
}


export const ProductServices = {
    createProductsIntoDB
}