import {  Request, Response } from "express"

const createProducts = (req:Request, res:Response)=>{
    console.log("sss")

    res.status(200).json({
        name:"d"
    })
    
}


export const ProductController = {
    createProducts
}