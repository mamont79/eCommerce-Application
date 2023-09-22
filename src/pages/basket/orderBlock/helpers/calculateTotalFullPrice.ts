/* eslint-disable no-param-reassign */
import { ICartFields } from '../../types';

export function calculateTotalFullPrice(cartFields: ICartFields) {
  return cartFields.items.reduce(
    (accumulator, { productPriceInCents, quantity }) => {
      if (productPriceInCents && quantity) {
        accumulator += productPriceInCents * quantity;
      }
      return accumulator;
    },
    0
  );
}
