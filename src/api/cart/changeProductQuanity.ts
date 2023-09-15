import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { getIndexMyCart } from './localeStorageCart';

export const changeProductQuantity = async (
  customerId: string,
  lineItemId: string,
  cartVersion: number,
  newQuantity: number
) => {
  const myCartId = getIndexMyCart(customerId);
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.post(
    `/me/carts/${myCartId}`,
    {
      version: cartVersion,
      actions: [
        {
          action: 'changeLineItemQuantity',
          lineItemId: `${lineItemId}`,
          quantity: newQuantity,
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
