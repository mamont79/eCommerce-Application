import { getTokenCookie } from './cookieToken';
import { axiosInstance } from './index';

export const registrationCustomer = async () => {
  const authToken = getTokenCookie('access_token');

  const response = await axiosInstance.post(
    '/me/signup',
    {
      email: 'billy-cl4@rambler.ru',
      firstName: 'Bill',
      lastName: 'Clinton',
      password: 'Bill!Clinton99',
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response.data;
};
