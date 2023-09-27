import { Cart } from '@commercetools/platform-sdk';
import { ICartFields } from '../../pages/basket/types';

export type ICartState = {
  cart: Cart | null;
  cartFields: ICartFields | null;
  message: string | null;
};
