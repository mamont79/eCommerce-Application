import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

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
  return data;
};
