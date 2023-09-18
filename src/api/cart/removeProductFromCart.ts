import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export type IRemoveProduct = {
  cartId: string | undefined;
  lineItemId: string | undefined;
  cartVersion: number | undefined;
};

export const removeProduct = async ({
  cartId,
  lineItemId,
  cartVersion,
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
