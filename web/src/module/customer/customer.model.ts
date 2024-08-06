import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer extends BaseEntity {
    constructor(
        name?: string,
        document?: string,
        email?: string,
        phone?: string
    ) {
        super()
        this.name = name;
        this.document = document;
        this.email = email;
        this.phone = phone;
    }
    
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    name?: string;

    @Column()
    document?: string;

    @Column()
    email?: string;

    @Column()
    phone?: string;
}
  