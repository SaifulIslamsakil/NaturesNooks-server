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

const getAllProduct = catchAsync(async (req: Request, res: Response) => {
    const result = await ProductServices.getAllProductFormDB(req.query)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'product recived successfully',
        data: result,
    });
})

const getSingelProduct = catchAsync(async (req: Request, res: Response) => {
    const result = await ProductServices.getSingelProductInDB(req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'product recived successfully',
        data: result,
    });
})

const productDelete = catchAsync(async (req: Request, res: Response) => {
    const result = ProductServices.productDeleteIntoDB(req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'product deleted successfully',
        data: result,
    });
})


const productUpdate = catchAsync(async (req: Request, res: Response) => {
    const result = await ProductServices.productUpdateIntoDB(req.body, req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'product updated successfully',
        data: result,
    });
})

export const ProductController = {
    createProducts,
    getAllProduct,
    getSingelProduct,
    productDelete,
    productUpdate
}