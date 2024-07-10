import { Datasource } from "../db/datasource";
import { Product } from "../model/product";

const ProductService = {
    async all() {
        return await Datasource.manager().find(Product);
    },
    async create(product: Product) {
        const repo = Datasource.instance().getRepository(Product);
        return await repo.save(product);
    }
}

export { ProductService }