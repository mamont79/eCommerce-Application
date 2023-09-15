/* eslint-disable no-console */
import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export const getAnonimCartById = async (anonimCartId: string) => {
  const anonimToken = getTokenCookie('anonim_token');
  const { data } = await publicInstance.get(`/carts/${anonimCartId}`, {
    headers: {
      Authorization: `Bearer ${anonimToken}`,
    },
  });
  console.log(data);
  return data;
};
