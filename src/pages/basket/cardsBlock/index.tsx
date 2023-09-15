import { StyledCartCardsBlockWrapper } from './style';
import { CartCard } from './CartCard';
import { StyledEmptyCartContainer } from '../style';
import { StyledDeleteCartItemBtn } from './CartCard/style';
import { StyledCartText } from './CartCard/components/TextBlock/style';
import { ICartFields } from '../types';

export function CartCardsBlock({ goodsData }: { goodsData: ICartFields }) {
  // eslint-disable-next-line no-console
  console.log(goodsData);

  return (
    <StyledCartCardsBlockWrapper>
      <StyledEmptyCartContainer>
        <StyledDeleteCartItemBtn />
        <StyledCartText>Empty shopping cart</StyledCartText>
      </StyledEmptyCartContainer>
      {goodsData.items.map((item) => (
        <CartCard CardProps={item} key={item.title} />
      ))}
    </StyledCartCardsBlockWrapper>
  );
}
