import { UserCreateRequestData } from '../pages/registration/RegistrationForm/CustomFormElements/type';
import { getAuthToken } from './auth';
import { publicInstance } from './index';

export const registrationCustomer = async (
  newUserRequestData: UserCreateRequestData
) => {
  const authToken = await getAuthToken();
  const response = await publicInstance.post('/me/signup', newUserRequestData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
};
