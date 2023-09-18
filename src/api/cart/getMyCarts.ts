import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export const checkExistMyCarts = async () => {
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.get(`/me/carts`, {
    headers: {
      Authorization: `Bearer ${mailToken}`,
    },
  });
  return data.total;
};
