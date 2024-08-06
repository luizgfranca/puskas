import { Customer } from "../../../../module/customer/customer.model";

type CreateCustomerDto = {
    name?: string;
    document?: string;
    email?: string;
    phone?: string;
}

const CreateCustomerDtoUtils = {
    toCustomer(dto: CreateCustomerDto) {
        const { name, document, email, phone } = dto;
        return new Customer(name, document, email, phone)
    }
}

export type { CreateCustomerDto }
export { CreateCustomerDtoUtils }