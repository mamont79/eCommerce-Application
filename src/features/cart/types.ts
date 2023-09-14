import { Cart } from '@commercetools/platform-sdk';
import { ICartFields } from '../../pages/basket/types';

export type ICartState = {
  cart: Cart | null;
  cartFields: ICartFields | null;
  status: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message: any | null;
};
