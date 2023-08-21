/* eslint-disable no-console */
import { getTokenCookie } from './cookieToken';
import { axiosInstance } from './index';

// eslint-disable-next-line consistent-return
export const registrationCustomer = async () => {
  try {
    const authToken = getTokenCookie('access_token');
    console.log(authToken);

    const response = await axiosInstance({
      method: 'post',
      url: '/me/signup',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      data: {
        email: 'billy@rambler.ru',
        firstName: 'Bill',
        lastName: 'Clinton',
        password: 'Bill!Clinton99',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
