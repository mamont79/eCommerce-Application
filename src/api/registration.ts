/* eslint-disable no-console */
import { getTokenCookie } from './cookieToken';
import { axiosInstance } from './index';

// eslint-disable-next-line consistent-return
export const registrationCustomer = async () => {
  try {
    const authToken = getTokenCookie('access_token');
    console.log(authToken);

    const response = await axiosInstance({});
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
