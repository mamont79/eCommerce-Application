import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { createMyCart } from './createMyCart';

export type IDeleteMyCart = {
  cartId?: string;
  myCartVersion?: number;
};

export const deleteMyCart = async ({
  cartId,
  myCartVersion,
}: IDeleteMyCart) => {
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.delete(`/me/carts/${cartId}`, {
    params: {
      version: myCartVersion,
    },
    headers: {
      Authorization: `Bearer ${mailToken}`,
    },
  });
  await createMyCart();
  return data;
};
