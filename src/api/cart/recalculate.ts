import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

type IRecalculate = {
  cartId: string;
  cartVersion: number;
};

export const recalculate = async ({ cartId, cartVersion }: IRecalculate) => {
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.post(
    `/me/carts/${cartId}`,
    {
      version: cartVersion,
      actions: [
        {
          action: 'recalculate',
          updateProductData: true,
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
