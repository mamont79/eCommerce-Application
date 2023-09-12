import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { getIndexMyCart } from './localeStorageCart';

export const addProductToMyCart = async (
  customerId: string,
  productId: string
) => {
  const myCartId = getIndexMyCart(customerId);
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.post(
    `/me/carts/${myCartId}`,
    {
      version: 1,
      actions: [
        {
          action: 'addLineItem',
          productId: `${productId}`,
          variantId: 1,
          quantity: 1,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${mailToken}`,
      },
    }
  );
  return data;
};
