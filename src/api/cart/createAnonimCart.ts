import { publicInstance } from '..';
import { getAnonimToken } from '../authAnonim';

import { saveIndexAnonimCart } from './localeStorageCart';

export const createAnonimCart = async () => {
  const anonimToken = await getAnonimToken();

  const { data } = await publicInstance.post(
    `/carts`,
    { currency: 'EUR' },
    {
      headers: {
        Authorization: `Bearer ${anonimToken}`,
      },
    }
  );
  saveIndexAnonimCart(data.id);
  return data;
};
