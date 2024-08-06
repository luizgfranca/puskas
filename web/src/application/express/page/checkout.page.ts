import type { Router } from "express";
import { printSession } from "../controller/dto/session.dto";

export function CheckoutPage(router: Router) {
    router.get('/checkout', async (req, res) => {
        printSession(req.session)
        res.render('checkout')
    })
}