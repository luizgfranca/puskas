import { Datasource } from "../../infrastructure/db/datasource";
import { Cart } from "./cart.model";

const CartRepository = Datasource.instance().getRepository(Cart);

export { CartRepository }