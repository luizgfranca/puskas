import type { Address } from "../address/address.model";
import type { Cart } from "../cart/cart.model";
import type { Customer } from "../customer/customer.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

const OrderService = {
    async create(customer: Customer, cart: Cart, address: Address) {
        const order = new Order(customer, cart, address);
        const saved = await OrderRepository.save(order);
        return saved;
    }
}

export { OrderService }