import { publicInstance } from '..';
import { getAnonimToken } from '../authAnonim';

export type IAddProductToCartAction = {
  productId: string;
  cartId: string;
  cartVersion: number;
  productVariantId: number;
};

export const addProductToAnonimousCart = async ({
  productId,
  cartId,
  cartVersion,
  productVariantId,
}: IAddProductToCartAction) => {
  const anonimToken = await getAnonimToken();
  const { data } = await publicInstance.post(
    `/carts/${cartId}`,
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
        Authorization: `Bearer ${anonimToken}`,
      },
    }
  );
  return data;
};
