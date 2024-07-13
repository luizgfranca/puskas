import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Location extends BaseEntity {
    constructor(
        name?: string
    ) {
        super();

        this.name = name ?? '';
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;
}