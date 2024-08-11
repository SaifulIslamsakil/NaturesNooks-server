import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { PaymentService } from "./payment.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const paymentIntregate = catchAsync(async(req:Request, res:Response)=>{
    const result = await PaymentService.paymentIntregateIntoDB(req?.body)
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message:'thanks you payment successfully',
        data: result,
    })
})


export const PyamentController = {
    paymentIntregate
}