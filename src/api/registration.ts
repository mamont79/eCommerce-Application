import { ICustomerDraft } from '../types/customerTypes';
import { getAuthToken } from './auth';
import { getAuthEmailToken } from './authByEmail';
import { publicInstance } from './index';

export const registrationCustomer = async (
  newUserRequestData: ICustomerDraft
) => {
  const authToken = await getAuthToken();
  const response = await publicInstance.post('/me/signup', newUserRequestData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  });
  const { email, password } = newUserRequestData;
  getAuthEmailToken({ password, username: email });
  return response.data;
};
