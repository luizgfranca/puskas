import type { Router } from "express";
import { printSession } from "../controller/dto/session.dto";

const CheckoutConfirmationPage = (router: Router) => {
    router.get('/checkout-confirmation', async (req, res) => {
        res.render('checkout-confirmation')
    })
}

export { CheckoutConfirmationPage }