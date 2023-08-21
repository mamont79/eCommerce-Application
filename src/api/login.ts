import { getTokenCookie } from './cookieToken';
import { axiosInstance } from './index';

export const loginMeCustomer = async (loginData: LoginData) => {
  const authToken = getTokenCookie('access_token');
  const response = await axiosInstance.post(
    `/me/login`,
    {
      email: loginData.username,
      password: loginData.password,
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};
