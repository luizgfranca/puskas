import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Location } from "../location/location.model";

@Entity()
export class Product extends BaseEntity {
  constructor(primaryTitle?: string, secondaryTitle?: string, price?: number) {
    super();

    this.primaryTitle = primaryTitle || "";
    this.secondaryTitle = secondaryTitle || "";
    this.price = price ?? 0;
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  primaryTitle: string;

  @Column()
  secondaryTitle: string;

  @Column()
  price: number;

  @ManyToMany(() => Location, { eager: true })
  @JoinTable({ name: "rel_product_available_in_location" })
  availableLocations?: Location[];

  isAvailableInLocation(location: Location) {
    return (
      this.availableLocations &&
      this.availableLocations.find(
        (availableLocation) => availableLocation.id === location.id,
      )
    );
  }
}
