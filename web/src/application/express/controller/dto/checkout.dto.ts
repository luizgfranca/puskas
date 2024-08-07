export type StartCheckoutWithProductRequest = {
    productId?: string;
}

export type CheckoutCreatingOrderDto = {
    customerId?: number;
    cartId?: number;
    addressId?: number;
}

const CheckoutCreatingOrderDtoUtils = {
    isValid(dto: CheckoutCreatingOrderDto) {
        const { customerId, cartId, addressId } = dto;
        return customerId && cartId && addressId;
    }
}

export { CheckoutCreatingOrderDtoUtils }
