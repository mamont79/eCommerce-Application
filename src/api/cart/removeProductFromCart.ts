import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

type IRemoveProduct = {
  cartId: string;
  lineItemId: string;
  cartVersion: number;
  removeQuantity: number;
};

export const removeProduct = async ({
  cartId,
  lineItemId,
  cartVersion,
  removeQuantity,
}: IRemoveProduct) => {
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
