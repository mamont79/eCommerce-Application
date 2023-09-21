import { publicInstance } from '..';
import { getAuthToken } from '../auth';

export const getDiscountCodes = async () => {
  const authToken = await getAuthToken();
  const { data } = await publicInstance.get(`/discount-codes`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return data.results;
};
