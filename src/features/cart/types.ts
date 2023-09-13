import { Cart } from '@commercetools/platform-sdk';

export type ICartState = {
  cart: Cart | null;
  status: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message: any | null;
};
