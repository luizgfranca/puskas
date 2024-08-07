import { Datasource } from "../../infrastructure/db/datasource";
import { Address } from "./address.model";

const AddressRepository = Datasource.instance().getRepository(Address);

export { AddressRepository }