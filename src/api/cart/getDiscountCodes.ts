/* eslint-disable no-console */
import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export const getDiscountCodes = async () => {
  const accessToken = getTokenCookie('access_token');
  const { data } = await publicInstance.get(`/discount-codes`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(data.results);
  return data.results;
};
