import type { Router } from "express";
import { ProductService } from "../../../module/product/product.service";

export function IndexPage(router: Router) {
    router.route('/')
        .get(async (req, res) => {
            const products = await ProductService.all();
            res.render('index', { products })
        })
}