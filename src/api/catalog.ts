import { getAuthToken } from './auth';
import { publicInstance } from './index';

export const catalogProducts = async () => {
  const authToken = await getAuthToken();
  const { data } = await publicInstance.get(`/products`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  // eslint-disable-next-line no-console
  console.log(data.results);
  return data.results;
};
