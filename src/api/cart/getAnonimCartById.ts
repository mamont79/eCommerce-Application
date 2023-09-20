/* eslint-disable no-console */
import { publicInstance } from '..';
import { getAnonimToken } from '../authAnonim';
import { createAnonimCart } from './createAnonimCart';
import { getIndexAnonimCart } from './localeStorageCart';

export const getAnonimCartById = async () => {
  const anonimToken = await getAnonimToken();

  let anonimCartId = getIndexAnonimCart();
  if (!anonimCartId) {
    const newAnonimCart = await createAnonimCart();
    anonimCartId = newAnonimCart.id;
  }
  const { data } = await publicInstance.get(`/carts/${anonimCartId}`, {
    headers: {
      Authorization: `Bearer ${anonimToken}`,
    },
  });
  console.log(data);
  return data;
};
