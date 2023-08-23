import { INewUserData } from '../pages/registration/RegistrationForm/CustomFormElements/requestTypes';
import { getTokenCookie } from './cookieToken';
import { axiosInstance } from './index';

export const registrationCustomer = async ({
  email,
  firstName,
  lastName,
  password,
}: INewUserData) => {
  const authToken = getTokenCookie('access_token');
  const response = await axiosInstance.post(
    '/me/signup',
    {
      email,
      firstName,
      lastName,
      password,
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
