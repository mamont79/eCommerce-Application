import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';
import { IChangeProductQuantity } from './changeProductQuanity';

export const changeProductQuantityInAnomimousCart = async ({
  cartId,
  lineItemId,
  cartVersion,
  newQuantity,
}: IChangeProductQuantity) => {
  const anonimToken = getTokenCookie('anonim_token');
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
