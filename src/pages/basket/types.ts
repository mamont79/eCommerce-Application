export interface ICartFields {
  items: ICartItem[];
  cartPriceInCents: number;
  currencyCode: string;
}

export interface ICartItem {
  imgUrl?: string;
  title?: string;
  attributes?: IAttribute[];
  quantity?: number;
  productPriceInCents?: number;
  productDiscountedPriceInCents?: number | undefined;
  totalDiscountedPriceInCents?: number;
  currencyCode?: string;
}

export type ICartCardProps = {
  CardProps: ICartItem;
};

export type IAttribute = {
  name: string;
  value: string;
};
