import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { OrderInfoService } from "./orderInfo.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const createOrderInfo = catchAsync(async(req:Request, res:Response)=>{
    const body = req.body
    const result = await OrderInfoService.createOrderInfoIntoDB(body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"your order successfull",
        data:result
        
    })
})

export const OrderController = {
    createOrderInfo
}