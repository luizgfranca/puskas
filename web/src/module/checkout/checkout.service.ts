import { CartService } from "../cart/cart.service"
import type { Location } from "../location/location.model";
import { ProductService } from "../product/product.service";

const CheckoutService = {
    async startCheckoutWithProduct(location: Location, productId: number) {
        const productPromise = ProductService.get(productId);
        const cartPromise = CartService.createCart(location);

        const product = await productPromise;
        if(!product) {
            return null;
        }

        const cart = await cartPromise;
        const newCart = await CartService.addItemToCart(cart, product, product.price);
        if(!newCart) {
            return null;
        }

        return newCart;
    }
}

export { CheckoutService }