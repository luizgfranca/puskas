import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address extends BaseEntity {
    constructor(
        postcode?: string,
        street?: string,
        streetNumber?: string,
        complement?: string,
        city?: string,
        state?: string,
    ) {
        super()
        this.postcode = postcode;
        this.street = street;
        this.streetNumber = streetNumber;
        this.complement = complement;
        this.city = city;
        this.state = state;
    }
    
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    postcode?: string
    
    @Column()
    street?: string
    
    @Column()
    streetNumber?: string
    
    @Column()
    complement?: string
    
    @Column()
    city?: string
    
    @Column()
    state?: string
}