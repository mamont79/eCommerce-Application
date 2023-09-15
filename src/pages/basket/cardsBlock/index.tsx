import { LineItem } from '@commercetools/platform-sdk';
import { StyledCartCardsBlockWrapper } from './style';
import { CartCard } from './CartCard';
import { StyledEmptyCartContainer } from '../style';
import { StyledDeleteCartItemBtn } from './CartCard/style';
import { StyledCartText } from './CartCard/components/TextBlock/style';

export function CartCardsBlock({ goodsData }: { goodsData: LineItem[] }) {
  // eslint-disable-next-line no-console
  console.log(goodsData[0]);
  return (
    <StyledCartCardsBlockWrapper>
      <StyledEmptyCartContainer>
        <StyledDeleteCartItemBtn />
        <StyledCartText>Empty shopping cart</StyledCartText>
      </StyledEmptyCartContainer>
      {goodsData.map((item) => (
        <CartCard key={item.id} lineItem={item} />
      ))}
    </StyledCartCardsBlockWrapper>
  );
}
