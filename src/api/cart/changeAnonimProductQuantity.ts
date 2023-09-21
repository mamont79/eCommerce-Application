import { publicInstance } from '..';
import { getAnonimToken } from '../authAnonim';

type IChangeProductQuantity = {
  cartId: string;
  lineItemId: string;
  cartVersion: number;
  newQuantity: number;
};

export const changeAnonimProductQuantity = async ({
  cartId,
  lineItemId,
  cartVersion,
  newQuantity,
}: IChangeProductQuantity) => {
  const anonimToken = await getAnonimToken();
  const { data } = await publicInstance.post(
    `/carts/${cartId}`,
    {
      version: cartVersion,
      actions: [
        {
          action: 'changeLineItemQuantity',
          lineItemId: `${lineItemId}`,
          quantity: newQuantity,
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
