import { DataSource } from "typeorm";
import { Product } from "../model/product";

const AppDatasource = new DataSource({
    type: 'sqlite',
    database: 'test.sqlite',
    entities: [Product]
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