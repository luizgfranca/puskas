import { Datasource } from "../../infrastructure/db/datasource";
import { Customer } from "./customer.model";

const CustomerRepository = Datasource.instance().getRepository(Customer);

export { CustomerRepository }