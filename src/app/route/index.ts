import express from "express"
import { ProductsRoute } from "../modules/products/products.route";
import { CategoryRoute } from "../modules/category/category.route";
import { PaymentRoute } from "../modules/payment/pyament.route";
import { productReviewRoute } from "../modules/productReview/productReview.route";

const Router = express.Router()
const moduleRoute = [
    {
        path: "/product",
        Route: ProductsRoute
    },
    {
        path: "/category",
        Route: CategoryRoute
    },
    {
        path: "/payment",
        Route: PaymentRoute
    },
    {
        path: "/review",
        Route: productReviewRoute
    },
    

]

moduleRoute.forEach(route => Router.use(route.path, route.Route));

export default Router