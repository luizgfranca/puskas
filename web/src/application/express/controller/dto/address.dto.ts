import { Address } from "../../../../module/address/address.model";

type CreateAddressDto = {
  postcode?: string;
  street?: string;
  streetNumber?: string;
  complement?: string;
  city?: string;
  state?: string;
};

const CreateAddressDtoUtils = {
  isValid(dto: CreateAddressDto) {
    return (
      dto.postcode && dto.street && dto.streetNumber && dto.city && dto.state
    );
  },
  toAddress(dto: CreateAddressDto) {
    const { postcode, street, streetNumber, complement, city, state } = dto;
    const address = new Address(postcode, street, streetNumber, complement, city, state);
    return address;
  },
};

export type { CreateAddressDto };
export { CreateAddressDtoUtils };


