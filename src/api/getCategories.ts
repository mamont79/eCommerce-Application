import { getAuthToken } from './auth';
import { publicInstance } from './index';

export const getCategories = async () => {
  const authToken = await getAuthToken();

  const { data } = await publicInstance.get(`/categories`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return data.results;
};
