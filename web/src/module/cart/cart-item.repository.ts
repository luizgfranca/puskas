import { Datasource } from "../../infrastructure/db/datasource";
import { CartItem } from "./cart-item.model";

const CartItemRepository = Datasource.instance().getRepository(CartItem);

export { CartItemRepository }