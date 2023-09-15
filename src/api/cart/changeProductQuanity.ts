import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export const changeProductQuantity = async (
  cartId: string,
  lineItemId: string,
  cartVersion: number,
  newQuantity: number
) => {
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.post(
    `/me/carts/${cartId}`,
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
