import type { Router } from "express";
import { OrderService } from "../../../module/order/order.service";


const OrderController = (router: Router) => {
    router.get('/order', async (req, res) => {
        const result = await OrderService.all();
        res.json(result);
    })
}

export { OrderController }