import type { Router } from "express";
import { ProductService } from "../service/product.service";

export function IndexController(router: Router) {
    router.route('/')
        .get(async (req, res) => {
            const products = await ProductService.all();
            res.render('index', { products })
        })
}