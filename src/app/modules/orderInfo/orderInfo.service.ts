import { TOrderInfo } from "./orderInfo.interface";

const createOrderInfoIntoDB  = async (payload:TOrderInfo)=>{
    console.log(payload)
}


export const OrderInfoService = {
    createOrderInfoIntoDB
}