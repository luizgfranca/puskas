import type { Location } from "../location/location.model";
import { Product } from "../product/product.model";
import type { CartItem } from "./cart-item.model";
import { CartItemRepository } from "./cart-item.repository";
import { CartFactory } from "./cart.factory";
import { Cart } from "./cart.model";
import { CartRepository } from "./cart.repository";

const CartService = {
  async all() {
    return await CartRepository.find();
  },
  async get(id: number) {
    return await CartRepository.findOneBy({ id });
  },
  async createCart(location: Location) {
    const cart = CartFactory.createCart(location);
    return await CartRepository.save(cart);
  },
  async addItemToCart(cart: Cart, product: Product, price: number) {
    if (
      !cart.location ||
      !product.isAvailableInLocation(cart.location) ||
      cart.alreadyHasItemForProduct(product)
    ) {
      return null;
    }

    const item = CartFactory.createItem(cart, product, price);
    const saved = await CartItemRepository.save(item);
    return await CartRepository.findOneBy({ id: cart.id });
  },
};

export { CartService };
