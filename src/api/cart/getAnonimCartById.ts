/* eslint-disable no-console */
import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { getIndexAnonimCart } from './localeStorageCart';

export const getAnonimCartById = async () => {
  const anonimToken = getTokenCookie('anonim_token');
  const anonimCartId = getIndexAnonimCart();
  const { data } = await publicInstance.get(`/carts/${anonimCartId}`, {
    headers: {
      Authorization: `Bearer ${anonimToken}`,
    },
  });
  console.log(data);
  return data;
};
