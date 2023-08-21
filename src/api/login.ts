/* eslint-disable no-console */
import { getTokenCookie } from './cookieToken';
import { axiosInstance } from './index';

// eslint-disable-next-line consistent-return
export const loginCustomer = async () => {
  try {
    const authToken = getTokenCookie('access_token');
    console.log(authToken);
    const response = await axiosInstance.post(
      `/login`,
      {},
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        data: {
          email: 'johndoe@example.com',
          password: 'secret123',
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line consistent-return
export const loginMeCustomer = async () => {
  try {
    const authToken = getTokenCookie('access_token');
    console.log(authToken);
    const response = await axiosInstance({
      method: 'post',
      url: '/login',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: {
        email: 'johndoe@example.com',
        password: 'secret123',
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
