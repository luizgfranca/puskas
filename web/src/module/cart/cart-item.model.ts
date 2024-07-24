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
  ManyToOne,
} from "typeorm";
import { Cart } from "./cart.model";
import { Product } from "../product/product.model";

@Entity()
export class CartItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Cart, (cart) => cart.items)
  @JoinColumn()
  cart?: Cart;

  @OneToOne(() => Product, { eager: true })
  @JoinColumn()
  product?: Product;

  @Column()
  price?: number;
}
