import { Product } from "../../model/product";

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