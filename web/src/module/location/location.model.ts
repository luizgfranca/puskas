import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Location extends BaseEntity {
    constructor(
        name?: string,
        acronym?: string
    ) {
        super();

        this.name = name ?? '';
        this.acronym = acronym ?? '';
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;

    @Column()
    acronym: string;
}