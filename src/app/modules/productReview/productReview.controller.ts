import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { productReviewService } from "./productReview.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const createProductReview =  catchAsync(async(req:Request, res:Response)=>{
    const body = req.body
    const result = await productReviewService.createProductReviewInToDB(body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Thank You!!  Add The Your Review",
        data:result
    })
})

const getProductReview = (catchAsync(async(req:Request, res:Response)=>{
    const id = req.params.id
    const result = await productReviewService.getProductReviewFormDB(id)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:" successfully get singel product review data",
        data:result
    })
}))

export const productReviewController = {
    createProductReview,
    getProductReview
}