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

type ImagesType = {
  url: string;
};

export type ProductType = {
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
};

export type ProductState = {
  productsData: Array<ProductType>;
};
