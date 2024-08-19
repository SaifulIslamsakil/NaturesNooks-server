import { confiq } from "../../confiq";
// import { TPyament } from "./payment.interface";
import Stripe from 'stripe';

const stripe = new Stripe(confiq.Stripe_Scrict_key as string);

const paymentIntregateIntoDB = async (amount: number)=>{
    const paymentIntent = await stripe.paymentIntents.create({
        amount ,
        currency: 'usd',
      });
      console.log(amount)
      console.log(paymentIntent)

      return { clientSecret: paymentIntent.client_secret }
}


export const PaymentService = {
    paymentIntregateIntoDB
}