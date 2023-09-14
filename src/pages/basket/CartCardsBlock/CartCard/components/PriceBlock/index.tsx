import { LineItem } from '@commercetools/platform-sdk';

export function PriceBlock({ price }: Pick<LineItem, 'price'>) {
  // eslint-disable-next-line no-console
  console.log(price);
  const currentPrice = 0;
  const priceWithoutDiscount = 0;
  return (
    <div>
      <div>{currentPrice}</div>
      <div>{priceWithoutDiscount}</div>
    </div>
  );
}
