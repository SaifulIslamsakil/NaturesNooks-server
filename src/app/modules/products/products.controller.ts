import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { ProductServices } from "./products.service"
import sendResponse from "../../utils/sendResponse"
import httpStatus from "http-status"

const createProducts = catchAsync(async (req: Request, res: Response) => {
    const body = req.body
    const result = await ProductServices.createProductsIntoDB(body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'product created successfully',
        data: result,
    });

})



export const ProductController = {
    createProducts
}