import express from "express"
import { ProductsRoute } from "../modules/products/products.route";

const Router = express.Router()
const moduleRoute = [
    {
        path: "/product",
        Route: ProductsRoute
    },
    

]

moduleRoute.forEach(route => Router.use(route.path, route.Route));

export default Router