export type ICartFields = {
  items: ICartItem[];
  cartPriceInCents: number;
  currencyCode: string;
};

export type ICartItem = {
  imgUrl: string;
  title: string;
  attributes: IAttribute[];
  quantity: number;
  productPriceInCents: number;
  productDiscountedPriceInCents: number | undefined;
  totalDiscountedPriceInCents: number;
  currencyCode: string;
};

export type IAttribute = {
  name: string;
  value: string;
};
