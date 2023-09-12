import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { getIndexMyCart } from './localeStorageCart';

export const deleteMyCart = async (
  customerId: string,
  myCartVersion: number
) => {
  const mailToken = getTokenCookie('mail_token');
  const myCartId = getIndexMyCart(customerId);
  const { data } = await publicInstance.delete(`/me/carts/${myCartId}`, {
    params: {
      version: myCartVersion,
    },
    headers: {
      Authorization: `Bearer ${mailToken}`,
    },
  });
  return data;
};
