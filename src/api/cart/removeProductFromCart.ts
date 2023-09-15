import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { getIndexMyCart } from './localeStorageCart';

export const removeProduct = async (
  customerId: string,
  lineItemId: string,
  cartVersion: number,
  removeQuantity: number
) => {
  const myCartId = getIndexMyCart(customerId);
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.post(
    `/me/carts/${myCartId}`,
    {
      version: cartVersion,
      actions: [
        {
          action: 'removeLineItem',
          lineItemId: `${lineItemId}`,
          quantity: removeQuantity,
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
