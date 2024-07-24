import type { Product } from "../product/product.model";
import { Cart } from "./cart.model";
import { CartItem } from "./cart-item.model";
import type { Location } from "../location/location.model";

const CartFactory = {
    createCart(location: Location) {
        const cart = new Cart(location);
        cart.items = [];
        return cart;
    },
    
    createItem(
        cart: Cart,
        product: Product,
        price: number
    ) {
        const item = new CartItem()
        item.cart = cart;
        item.product = product;
        item.price = price;

        return item;
    }
};

export { CartFactory }