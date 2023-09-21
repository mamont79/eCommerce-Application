import { publicInstance } from '..';
import { getAnonimToken } from '../authAnonim';

export type IRemoveProduct = {
  cartId: string | undefined;
  lineItemId: string | undefined;
  cartVersion: number | undefined;
};

export const removeProductAnonim = async ({
  cartId,
  lineItemId,
  cartVersion,
}: IRemoveProduct) => {
  const anonimToken = await getAnonimToken();
  const { data } = await publicInstance.post(
    `/carts/${cartId}`,
    {
      version: cartVersion,
      actions: [
        {
          action: 'removeLineItem',
          lineItemId: `${lineItemId}`,
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
