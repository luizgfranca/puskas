import type { Router } from "express";
import type { StartCheckoutWithProductRequest } from "./dto/checkout.dto";
import { CheckoutService } from "../../../module/checkout/checkout.service";
import type { SessionDto } from "./dto/session.dto";

export function CheckoutController(router: Router) {
    router
        .post('/checkout', async (req, res) => {
            const { productId } = req.body as StartCheckoutWithProductRequest;
            if(!productId) {
                res.status(400);
                return res.end();
            }
            const productIdNumber = Number(productId);
            if(!productIdNumber) {
                res.status(400);
                return res.end();
            }

            const session = req.session as SessionDto;
            if(!session.location) {
                res.status(400);
                return res.end();
            }

            const cart = await CheckoutService.startCheckoutWithProduct(session.location, productIdNumber)
            if(!cart) {
                res.status(400);
                return res.end();
            }

            session.cart = cart;

            res.redirect('/checkout')
        })
}