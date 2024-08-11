import { model, Schema } from "mongoose";
import { TPyament } from "./payment.interface";


const paymentSchema = new Schema<TPyament>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipeCord:{
        type:Number,
        required:true
    }
}, {
    timestamps:true
}

)

export const PaymentModel = model<TPyament>("paymnet", paymentSchema)