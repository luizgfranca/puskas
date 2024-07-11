import { Product } from "../../../../module/product/product.model";

export type CreateProductDto = {
    primaryTitle?: string;
    secondaryTitle?: string;
    price?: number;
}

export function toProduct(dto: CreateProductDto): Product {
    return new Product(
        dto.primaryTitle, 
        dto.secondaryTitle,
        dto.price
    )
}