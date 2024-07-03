import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Product extends BaseEntity {
    constructor(
        primaryTitle?: string,
        secondaryTitle?: string, 
        price?: number
    ) {
        super();

        this.primaryTitle = primaryTitle ?? '';
        this,secondaryTitle = secondaryTitle ?? '';
        this.price = price ?? 0;
    }

    @PrimaryGeneratedColumn()
    id: number = 0

    @Column()
    primaryTitle: string = '';

    @Column()
    secondaryTitle: string = '';

    @Column()
    price: number = 0;
}