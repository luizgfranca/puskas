import { Datasource } from "../../infrastructure/db/datasource";
import { Order } from "./order.model";

const OrderRepository = Datasource.instance().getRepository(Order);

export { OrderRepository }