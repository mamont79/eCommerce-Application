import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export const removeProduct = async (
  cartId: string,
  lineItemId: string,
  cartVersion: number,
  removeQuantity: number
) => {
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.post(
    `/me/carts/${cartId}`,
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
