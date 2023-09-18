/* eslint-disable no-console */
import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { checkExistMyCarts } from './getMyCarts';
import { createMyCart } from './createMyCart';

export const getMyActiveCart = async () => {
  const mailToken = getTokenCookie('mail_token');
  const check = await checkExistMyCarts();
  console.log(check);
  if (!check) {
    await createMyCart();
  }
  const { data } = await publicInstance.get(`/me/active-cart`, {
    headers: {
      Authorization: `Bearer ${mailToken}`,
    },
  });
  console.log(data);
  return data;
};
