import { Product } from '../../components/card/types';

type PriceType = {
  value: {
    currencyCode: string;
    centAmount: number;
  };
  discounted?: {
    value: {
      currencyCode: string;
      centAmount: number;
    };
  };
};

type AttributesType = {
  name: string;
  value: {
    label: string;
  };
};

export type ImagesType = {
  url: string;
};

export interface ProductType {
  id: string;
  masterData: {
    current: {
      name: {
        'en-US': string;
      };
      description: {
        'en-US': string;
      };
      masterVariant: {
        prices: Array<PriceType>;
        images: Array<ImagesType>;
        attributes: Array<AttributesType>;
      };
    };
    published: boolean;
  };
  key: string;
}

export type ProductState = {
  productsData: Array<ProductType>;
  cardData: Array<Product>;
};

export type CurrentProductState = {
  currentProductData: Array<ProductType>;
};
