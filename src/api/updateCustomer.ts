import { publicInstance } from './index';
import { getTokenCookie } from './cookieToken';
import { IDataForUpdate } from '../pages/customerProfile/type';

export const updateCustomer = async (customerUpdateData: IDataForUpdate) => {
  const authToken = getTokenCookie('mail_token');
  const response = await publicInstance.post('/me', customerUpdateData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
};
