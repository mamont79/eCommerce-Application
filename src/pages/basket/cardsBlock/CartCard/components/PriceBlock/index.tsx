import { LineItem } from '@commercetools/platform-sdk';
import {
  StyledCardDiscountPrice,
  StyledCardPrice,
} from '../../../../../../components/card/style';
import { StyledpCartPriceContainer } from './style';

export function PriceBlock({ price }: Pick<LineItem, 'price'>) {
  // eslint-disable-next-line no-console
  console.log(price);
  const currentPrice = 50;
  const priceWithoutDiscount = 60;
  return (
    <StyledpCartPriceContainer>
      <StyledCardPrice>{currentPrice}</StyledCardPrice>
      <StyledCardDiscountPrice>{priceWithoutDiscount}</StyledCardDiscountPrice>
    </StyledpCartPriceContainer>
  );
}
