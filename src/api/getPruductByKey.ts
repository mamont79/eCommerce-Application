import { getAuthToken } from './auth';
import { publicInstance } from './index';

export const getProductByKey = async (productTitle: string) => {
  const authToken = await getAuthToken();
  const productKey = productTitle.toLowerCase().split('-').join('_');
  const { data } = await publicInstance.get(`products/key=${productKey}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return data;
};
