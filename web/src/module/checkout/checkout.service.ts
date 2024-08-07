import { AddressService } from "../address/address.service";
import { CartService } from "../cart/cart.service"
import { CustomerService } from "../customer/customer.service";
import type { Location } from "../location/location.model";
import { OrderService } from "../order/order.service";
import { ProductService } from "../product/product.service";

const CheckoutService = {
    async startCheckoutWithProduct(location: Location, productId: number) {
        const [ product, cart ] = await Promise.all([
            ProductService.get(productId), 
            CartService.createCart(location)
        ])

        if(!product || !cart) {
            return null;
        }

        const newCart = await CartService.addItemToCart(cart, product, product.price);
        if(!newCart) {
            return null;
        }

        return newCart;
    },
    async createOrder(customerId: number, cartId: number, addressId: number) {
        const [customer, cart, address] = await Promise.all([
            CustomerService.get(customerId), 
            CartService.get(cartId), 
            AddressService.get(addressId)
        ]);

        if(!customer || !cart || !address) {
            return null;
        }

        return await OrderService.create(customer, cart, address);
    }
}

export { CheckoutService }