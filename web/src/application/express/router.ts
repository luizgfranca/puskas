import express, { Router } from 'express'
import { ProductController } from './controller/product.controller';
import { IndexPage } from './page/index.page';
import { LocationController } from './controller/location.controller';
import { LocationsPage } from './page/locations.page';
import { CartController } from './controller/cart.controller';
import { CheckoutPage } from './page/checkout.page';
import { CheckoutController } from './controller/checkout.controller';
import { CustomerController } from './controller/customer.controller';
import { AddressController } from './controller/address.controller';

export function getRouter(): Router {
    const router = express.Router();
    ProductController(router);
    LocationController(router);
    CartController(router);
    CheckoutController(router);
    CustomerController(router);
    AddressController(router);

    LocationsPage(router);
    IndexPage(router);
    CheckoutPage(router);

    return router;
}

