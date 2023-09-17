import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export const getMyCarts = async () => {
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.get(`/me/carts`, {
    headers: {
      Authorization: `Bearer ${mailToken}`,
    },
  });
  // console.log(data.total);
  return data.total;
};
