import { productsPerPage } from '../constants/avoidMagicNumbers';
import { getAuthToken } from './auth';
import { publicInstance } from './index';

export const catalogProducts = async (currentPage: number) => {
  const authToken = await getAuthToken();
  const { data } = await publicInstance.get(`/products`, {
    params: {
      limit: productsPerPage * currentPage,
    },
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return data.results;
};
