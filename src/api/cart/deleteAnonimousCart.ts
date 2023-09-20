import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { createAnonimCart } from './createAnonimCart';

export type IDeleteMyCart = {
  cartId?: string;
  myCartVersion?: number;
};

export const deleteAnonimousCart = async ({
  cartId,
  myCartVersion,
}: IDeleteMyCart) => {
  const anonimToken = getTokenCookie('anonim_token');

  await publicInstance.delete(`/carts/${cartId}`, {
    params: {
      version: myCartVersion,
    },
    headers: {
      Authorization: `Bearer ${anonimToken}`,
    },
  });
  const data = await createAnonimCart();
  return data;
};
