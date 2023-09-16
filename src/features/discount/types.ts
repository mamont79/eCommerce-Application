export interface DiscountType {
  id: string;
  code: string;
  name: {
    'en-US': string;
  };
  description: {
    'en-US': string;
  };
  isActive: boolean;
}

export type DiscountCodesState = {
  discountData: Array<DiscountType>;
};
