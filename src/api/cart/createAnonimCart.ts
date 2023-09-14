/* eslint-disable no-console */
import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { saveIndexMyCart } from './localeStorageCart';

export const createAnonimCart = async () => {
  const anonimToken = getTokenCookie('anonim_token');
  const { data } = await publicInstance.post(
    `/carts`,
    { currency: 'EUR' },
    {
      headers: {
        Authorization: `Bearer ${anonimToken}`,
      },
    }
  );
  console.log(data);
  saveIndexMyCart('anonimCartId', data.id);
  return data;
};
