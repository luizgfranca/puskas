import { ValidationService } from "../../../../module/validation/validation.service";

export type StartCheckoutWithProductRequest = {
  productId?: string;
};

export type CheckoutCreatingOrderDto = {
  customerId?: number;
  cartId?: number;
  addressId?: number;
};

export type CheckooutSubmissionDto = {
  document?: string;
  name?: string;
  email?: string;
  phone?: string;
  brithDate?: string;
  postCode?: string;
  street?: string;
  number?: string;
  complement?: string;
  neighbourhood?: string;
  city?: string;
  state?: string;
};

const CheckoutCreatingOrderDtoUtils = {
  isValid(dto: CheckoutCreatingOrderDto) {
    const { customerId, cartId, addressId } = dto;
    return customerId && cartId && addressId;
  },
};
const CheckooutSubmissionDtoUtils = {
  isValid(dto: CheckooutSubmissionDto) {
    const {
      document,
      name,
      email,
      phone,
      brithDate,
      postCode,
      street,
      number,
      complement,
      neighbourhood,
      city,
      state,
    } = dto;

    if (
      !(
        document &&
        name &&
        email &&
        phone &&
        brithDate &&
        postCode &&
        street &&
        number &&
        neighbourhood &&
        city &&
        state
      )
    ) {
      return false;
    }

    if (!ValidationService.isValidCPFCNPJDocument(document)) {
      return false;
    }
    if (!ValidationService.isValidEmail(email)) {
      return false;
    }
    if (!ValidationService.isValidPhone(phone)) {
      return false;
    }
    if (!ValidationService.isValidPostCode(postCode)) {
      return false;
    }
  },
};

export { CheckoutCreatingOrderDtoUtils };
