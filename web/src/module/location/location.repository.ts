import { Datasource } from "../../infrastructure/db/datasource";
import { Location } from "./location.model";

const LocationRepository = Datasource.instance().getRepository(Location);

export { LocationRepository }