import { DataSource } from "typeorm";
import { Product } from "../../module/product/product.model";
import { Location } from "../../module/location/location.model";
import { CartItem } from "../../module/cart/cart-item.model";
import { Cart } from "../../module/cart/cart.model";

const AppDatasource = new DataSource({
    type: 'sqlite',
    database: 'test.sqlite',
    entities: [Product, Location, Cart, CartItem]
});

export const Datasource = {
    async initialize() {
        try {
            await AppDatasource.initialize()
            console.log('datasource successfully initialized')
        } catch (e) {
            console.log('error initializing datasource', e)
        }
    },

    manager() {
        return AppDatasource.manager
    },

    instance() {
        return AppDatasource;
    }
}