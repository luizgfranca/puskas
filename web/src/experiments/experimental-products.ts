import { Product } from "../model/product";

export function experimentalProducts() {
    return [
        new Product(
            'Banda Larga',
            '300 Mega',
            100
        ),
        new Product(
            'Banda Larga',
            '600 Mega',
            120
        ),
        new Product(
            'Celular',
            '15 Giga',
            40
        )
    ]
    
}