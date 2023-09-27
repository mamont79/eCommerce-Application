import { Cart } from '@commercetools/platform-sdk';
import { ICartFields } from '../../../pages/basket/types';
import { getCartItem } from './getCartItem';

export function getCartFields({
  totalPrice: { centAmount, currencyCode },
  lineItems,
}: Cart): ICartFields {
  const items = lineItems.map((lItem) => getCartItem(lItem));

  return {
    cartPriceInCents: centAmount,
    currencyCode,
    items,
  };
}
