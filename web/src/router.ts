import express, { Router } from 'express'
import { ProductController } from './controller/product.controller';

export function getRouter(): Router {
    const router = express.Router();
    ProductController(router);

    return router;
}

