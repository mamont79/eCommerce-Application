/* eslint-disable no-console */
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
  console.log(data.results);
  return data.results;
};
