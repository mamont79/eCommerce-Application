import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export const recalculate = async (cartId: string, cartVersion: number) => {
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
