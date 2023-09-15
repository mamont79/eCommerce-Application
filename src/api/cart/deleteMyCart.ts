import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export const deleteMyCart = async (cartId: string, myCartVersion: number) => {
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.delete(`/me/carts/${cartId}`, {
    params: {
      version: myCartVersion,
    },
    headers: {
      Authorization: `Bearer ${mailToken}`,
    },
  });
  return data;
};
