import { TPyament } from "./payment.interface";


const paymentIntregateIntoDB = (payload:TPyament)=>{
    console.log(payload)
}


export const PaymentService = {
    paymentIntregateIntoDB
}