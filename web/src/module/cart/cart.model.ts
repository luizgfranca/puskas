import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { CartItem } from "./cart-item.model";
import { Location } from "../location/location.model";
import { Product } from "../product/product.model";

@Entity()
export class Cart extends BaseEntity {
  constructor(location?: Location) {
    super();

    this.location = location;
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Location, { eager: true })
  @JoinColumn()
  location?: Location;

  @OneToMany(() => CartItem, (item) => item.cart, { eager: true })
  @JoinColumn()
  items!: CartItem[];

  alreadyHasItemForProduct(product: Product) {
    return (
      this.items &&
      this.items.find((item) => item.product && item.product.id === product.id)
    );
  }
}
