export type CreateCartRequestDto = {
  locationAcronym?: string;
};

export type CreateCartItemRequestDto = {
  cartId: number;
  productId: number;
  price: number;
};
