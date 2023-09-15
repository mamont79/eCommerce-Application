import { publicInstance } from '..';
import { getTokenCookie } from '../cookieToken';

export type IAddProductToCartAction = {
  productId: string;
  cartId: string;
  cartVersion: number;
  productVariantId: number;
};

export const addProductToMyCart = async ({
  productId,
  cartId,
  cartVersion,
  productVariantId,
}: IAddProductToCartAction) => {
  const mailToken = getTokenCookie('mail_token');
  const { data } = await publicInstance.post(
    `/me/carts/${cartId}`,
    {
      version: cartVersion,
      actions: [
        {
          action: 'addLineItem',
          productId: `${productId}`,
          variantId: productVariantId,
          quantity: 1,
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
