import type { Customer } from "./customer.model";
import { CustomerRepository } from "./customer.repository";

const CustomerService = {
    async create(customer: Customer) {
        return await CustomerRepository.save(customer);
    },

    async all() {
        return await CustomerRepository.find();
    },

    async get(id: number) {
        return await CustomerRepository.findOneBy({ id })
    }
}

export { CustomerService }