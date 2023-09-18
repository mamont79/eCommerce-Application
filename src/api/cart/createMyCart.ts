/* eslint-disable no-console */
import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

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
  console.log(data);
  return data;
};
