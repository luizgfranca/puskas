import express, { Router } from 'express'
import { ProductController } from './controller/product.controller';
import { IndexPage } from './page/index.page';
import { LocationController } from './controller/location.controller';
import { LocationsPage } from './page/locations.page';

export function getRouter(): Router {
    const router = express.Router();
    ProductController(router);
    LocationController(router);

    IndexPage(router);
    LocationsPage(router);

    return router;
}

