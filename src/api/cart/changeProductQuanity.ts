import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export type IChangeProductQuantity = {
  cartId: string | undefined;
  lineItemId: string | undefined;
  cartVersion: number | undefined;
  newQuantity: number | undefined;
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
