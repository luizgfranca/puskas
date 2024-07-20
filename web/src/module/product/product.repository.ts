import { Datasource } from "../../infrastructure/db/datasource";
import { Product } from "./product.model";

const PRODUCTS_BY_AVAILABLE_LOCATION_QUERY = `
select p.* 
FROM product p
JOIN rel_product_available_in_location rpal on rpal.productId = p.id
WHERE rpal.locationId = :id
`

const ProductRepository = Datasource.instance()
    .getRepository(Product)
    .extend({
        async findAvailableOnLocation(locationId: number) {
            return this.query(PRODUCTS_BY_AVAILABLE_LOCATION_QUERY, [locationId]);
        }
    })

export { ProductRepository }