import type { Router } from "express";
import { experimentalProducts } from "../experiments/experimental-products";

export function ProductController(router: Router) {
    router
        .route('/product')
        .get((req, res) => [
            res.json(experimentalProducts())
        ])
}