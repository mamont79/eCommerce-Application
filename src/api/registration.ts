import { INewUserData } from '../pages/registration/RegistrationForm/CustomFormElements/requestTypes';
import { getAuthToken } from './auth';
import { axiosInstance } from './index';

export const registrationCustomer = async ({
  email,
  firstName,
  lastName,
  password,
}: INewUserData) => {
  const authToken = await getAuthToken();
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
