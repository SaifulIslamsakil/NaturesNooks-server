import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TCategory } from "./category.interface";
import { categoryModel } from "./category.model";


const createCategoryIntoDB = async (payload: TCategory)=>{
    const result = await categoryModel.create(payload)
    return result
}

const getAllCategoryFormDB = async ()=>{
    const result = await categoryModel.find()
    if(!result){
        throw new AppError(httpStatus.BAD_REQUEST, "data is not recived")
    }
    return result
}

export const CaregoryServices = {
    createCategoryIntoDB,
    getAllCategoryFormDB
}