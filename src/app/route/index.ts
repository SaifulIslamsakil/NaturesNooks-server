import express from "express"
import { ProductsRoute } from "../modules/products/products.route";
import { CategoryRoute } from "../modules/category/category.route";

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
    

]

moduleRoute.forEach(route => Router.use(route.path, route.Route));

export default Router