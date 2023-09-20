import { Cart } from '@commercetools/platform-sdk';
import { ICartFields } from '../../pages/basket/types';
import { IAddProductToCartAction } from '../../api/cart/addProductToMyCart';

export type ICartState = {
  cart: Cart | null;
  cartFields: ICartFields | null;
  message: string | null;
};

export type IAddProductToCartPayload = Pick<
  IAddProductToCartAction,
  'productId' | 'productVariantId'
> &
  Partial<Pick<IAddProductToCartAction, 'cartId' | 'cartVersion'>>;
