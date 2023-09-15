import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

type IAddDiscoutCode = {
  cartId: string;
  cartVersion: number;
  discountCode: string;
};

export const addDiscountCode = async ({
  cartId,
  cartVersion,
  discountCode,
}: IAddDiscoutCode) => {
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.post(
    `/me/carts/${cartId}`,
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
        Authorization: `Bearer ${mailToken}`,
      },
    }
  );
  return data;
};
