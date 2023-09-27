import { publicInstance } from './index';
import { getTokenCookie } from './cookieToken';

export const getCustomer = async () => {
  const authToken = getTokenCookie('mail_token');

  const response = await publicInstance.get('/me', {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
};
