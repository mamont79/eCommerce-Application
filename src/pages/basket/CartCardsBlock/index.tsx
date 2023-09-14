import { LineItem } from '@commercetools/platform-sdk';
import { StyledCartCardsBlockWrapper } from './style';
import { CartCard } from './CartCard';

export function CartCardsBlock({ goodsData }: { goodsData: LineItem[] }) {
  // eslint-disable-next-line no-console
  console.log(goodsData[0]);
  return (
    <StyledCartCardsBlockWrapper>
      {goodsData.map((item) => (
        <CartCard key={item.id} lineItem={item} />
      ))}
    </StyledCartCardsBlockWrapper>
  );
}
