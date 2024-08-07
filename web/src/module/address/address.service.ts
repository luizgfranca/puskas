import type { Address } from "./address.model";
import { AddressRepository } from "./address.repository";

const AddressService = {
    async create(address: Address) {
        return await AddressRepository.save(address);
    },
    async all() {
        return await AddressRepository.find();
    },
    async get(id: number) {
        return await AddressRepository.findOneBy({ id })
    }
}

export { AddressService }