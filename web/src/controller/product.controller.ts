import type { Router } from "express";
import { Datasource } from "../db/datasource";
import { Product } from "../model/product";
import { toProduct, type CreateProductDto } from "./dto/product.dto";

export function ProductController(router: Router) {
    router
        .route('/product')
        .get(async (req, res) => {
            const response = await Datasource.manager().find(Product);
            res.json( response )
        })
        .post(async (req, res) => {
            const input = req.body as CreateProductDto;
            if(!input.primaryTitle || !input.secondaryTitle || !input.price) {
                return res.status(400);
            }

            const repo = Datasource.instance().getRepository(Product);

            const product = await repo.save( toProduct(input) );

            res.status(201);
            res.json(product)
        })
}