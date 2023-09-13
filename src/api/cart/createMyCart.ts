import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { saveIndexMyCart } from './localeStorageCart';

export const createMyCart = async () => {
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.post(
    `/me/carts`,
    { currency: 'EUR' },
    {
      headers: {
        Authorization: `Bearer ${mailToken}`,
      },
    }
  );
  saveIndexMyCart(data.customerId, data.id);
  return data;
};
