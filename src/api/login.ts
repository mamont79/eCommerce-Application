import { getAuthToken } from './auth';
import { LoginData } from './authTypes';
import { publicInstance } from './index';

export const loginMeCustomer = async (loginData: LoginData) => {
  const authToken = await getAuthToken();
  const response = await publicInstance.post(
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
