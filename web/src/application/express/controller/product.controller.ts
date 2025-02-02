import type { Router } from "express";
import { toProduct, type CreateProductDto } from "./dto/product.dto";
import { ProductService } from "../../../module/product/product.service";

export function ProductController(router: Router) {
    router
        .route('/product')
        .get(async (req, res) => {
            const response = await ProductService.all();
            res.json( response )
        })
        .post(async (req, res) => {
            const input = req.body as CreateProductDto;
            if(!input.primaryTitle || !input.secondaryTitle || !input.price) {
                return res.status(400);
            }

            const product = await ProductService.create( toProduct(input) )

            res.status(201);
            res.json(product)
        })
    
    router
        .route('/location/:id/product')
        .get(async (req, res) => {
            const maybeId = Number(req.params?.id);
            
            if(maybeId) {
                const id = maybeId;
                const result = await ProductService.getProductsAvailableOnLocation(id);
                return res.json(result)
            }
            
            res.status(204);
            res.end();
        })
}