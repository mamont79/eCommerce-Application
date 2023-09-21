import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export type IRemoveProduct = {
  cartId: string | undefined;
  lineItemId: string | undefined;
  cartVersion: number | undefined;
};

export const removeProductFromAnonimousCart = async ({
  cartId,
  lineItemId,
  cartVersion,
}: IRemoveProduct) => {
  const anonToken = getTokenCookie('anonim_token');
  const { data } = await publicInstance.post(
    `/carts/${cartId}`,
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
        Authorization: `Bearer ${anonToken}`,
      },
    }
  );
  return data;
};
