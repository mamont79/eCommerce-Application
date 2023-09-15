import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

type IChangeProductQuantity = {
  cartId: string;
  lineItemId: string;
  cartVersion: number;
  newQuantity: number;
};

export const changeProductQuantity = async ({
  cartId,
  lineItemId,
  cartVersion,
  newQuantity,
}: IChangeProductQuantity) => {
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
