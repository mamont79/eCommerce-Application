import { publicInstance } from '..';
import { getAnonimToken } from '../authAnonim';
import { createAnonimCart } from './createAnonimCart';

export type IDeleteMyCart = {
  cartId?: string;
  myCartVersion?: number;
};

export const deleteAnonimousCart = async ({
  cartId,
  myCartVersion,
}: IDeleteMyCart) => {
  const anonimToken = await getAnonimToken();

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
