import {
    BaseEntity,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { Address } from "../address/address.model";
import { Cart } from "../cart/cart.model";
import { Customer } from "../customer/customer.model";

@Entity("sales_order")
export class Order extends BaseEntity {
  constructor(customer?: Customer, cart?: Cart, address?: Address) {
    super();
    this.customer = customer;
    this.cart = cart;
    this.address = address;
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @JoinColumn()
  @OneToOne(() => Customer, { eager: true })
  customer?: Customer;

  @JoinColumn()
  @OneToOne(() => Cart, { eager: true })
  cart?: Cart;

  @JoinColumn()
  @OneToOne(() => Address, { eager: true })
  address?: Address;
}
