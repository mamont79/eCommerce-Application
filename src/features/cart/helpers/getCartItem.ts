import { Image, LineItem } from '@commercetools/platform-sdk';
import { ICartItem } from '../../../pages/basket/types';

export function getCartItem({
  id,
  variant: { attributes, images },
  price: {
    value: { centAmount: singleItemPrice },
    discounted,
  },
  totalPrice: { centAmount, currencyCode },
  quantity,
  name,
}: LineItem): ICartItem {
  return {
    lineItemId: id,
    attributes: attributes || [],
    currencyCode,
    imgUrl: getImageUrl(images),
    productDiscountedPriceInCents: discounted
      ? discounted.value.centAmount
      : undefined,
    productPriceInCents: singleItemPrice,
    quantity,
    title: name['en-US'],
    totalDiscountedPriceInCents: centAmount,
  };
}

function getImageUrl(images: Image[] | undefined): string {
  if (!images || images.length === 0) return '';

  return images[0].url;
}
