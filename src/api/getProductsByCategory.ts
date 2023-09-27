import { getAuthToken } from './auth';
import { publicInstance } from './index';

export const getCategoryById = async (categoryId: string) => {
  const authToken = await getAuthToken();

  const { data } = await publicInstance.get(`/product-projections/search?`, {
    params: {
      filter: `categories.id:"${categoryId}"`,
    },
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return data.results;
};
