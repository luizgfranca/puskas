import type { Cart } from "../cart/cart.model";
import type { Location } from "../location/location.model";

export interface Session {
  id: string;
  cart?: Cart;
  location?: Location;
};
