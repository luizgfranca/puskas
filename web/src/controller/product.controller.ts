import type { Router } from "express";
import { Datasource } from "../db/datasource";
import { Product } from "../model/product";

export function ProductController(router: Router) {
    router
        .route('/product')
        .get(async (req, res) => {
            const response = await Datasource.manager().find(Product);
            console.log(response)
            res.json( response )
        })
}