import { Datasource } from "../../infrastructure/db/datasource";
import { Product } from "./product.model";
import { ProductRepository } from "./product.repository";

const ProductService = {
    async all() {
        return await Datasource.manager().find(Product);
    },
    async create(product: Product) {
        return await ProductRepository.save(product);
    },
    async getProductsAvailableOnLocation(locationId: number): Promise<Product[]> {
        return await ProductRepository.findAvailableOnLocation(locationId);
    }
}

export { ProductService }