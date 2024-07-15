import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CaregoryServices } from "./category.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const createCategory = catchAsync(async(req:Request, res:Response)=>{
    const body = req.body
    const result = await CaregoryServices.createCategoryIntoDB(body)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"category created successfully",
        data:result
    })
})
const getAllCategory = catchAsync(async(req:Request, res:Response)=>{
    const result = await CaregoryServices.getAllCategoryFormDB()

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"category recived successfully",
        data:result
    })
})


export const CaregoryController = {
    createCategory,
    getAllCategory
}