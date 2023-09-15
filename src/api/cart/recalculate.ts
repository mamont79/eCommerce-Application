import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { getIndexMyCart } from './localeStorageCart';

export const recalculate = async (customerId: string, cartVersion: number) => {
  const myCartId = getIndexMyCart(customerId);
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.post(
    `/me/carts/${myCartId}`,
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
