import { getAuthToken } from './auth';
import { publicInstance } from './index';

export const catalogProducts = async () => {
  const authToken = await getAuthToken();
  const { data } = await publicInstance.get(`/products`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return data.results;
};
