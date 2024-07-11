import express, { Router } from 'express'
import { ProductController } from './controller/product.controller';
import { IndexController } from './controller/index.controller';

export function getRouter(): Router {
    const router = express.Router();
    ProductController(router);
    IndexController(router);

    return router;
}

