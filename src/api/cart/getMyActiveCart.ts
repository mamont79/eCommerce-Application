import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export const getMyActiveCart = async () => {
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.get(`/me/active-cart`, {
    headers: {
      Authorization: `Bearer ${mailToken}`,
    },
  });
  return data;
};
