import { publicInstance } from '..';
import { getAnonimToken } from '../authAnonim';
import { IAddDiscoutCode } from './types';

export const addDiscountCodeAnonim = async ({
  cartId,
  cartVersion,
  discountCode,
}: IAddDiscoutCode) => {
  const anonimToken = await getAnonimToken();
  const { data } = await publicInstance.post(
    `/carts/${cartId}`,
    {
      version: cartVersion,
      actions: [
        {
          action: 'addDiscountCode',
          code: discountCode,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${anonimToken}`,
      },
    }
  );
  return data;
};
