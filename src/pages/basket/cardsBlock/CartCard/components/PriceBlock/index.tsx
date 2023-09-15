import {
  StyledCardDiscountPrice,
  StyledCardPrice,
} from '../../../../../../components/card/style';
import { ICartCardProps } from '../../../../types';
import { StyledpCartPriceContainer } from './style';

export function PriceBlock({ CardProps }: ICartCardProps) {
  const { currencyCode } = CardProps;
  let currentPrice: number | string = '';
  let priceWithoutDiscount: number | string = '';

  if (CardProps.productPriceInCents) {
    currentPrice = CardProps.productDiscountedPriceInCents
      ? CardProps.productDiscountedPriceInCents / 100
      : CardProps.productPriceInCents;
    priceWithoutDiscount = CardProps.productDiscountedPriceInCents
      ? `${CardProps.productPriceInCents / 100} ${currencyCode}`
      : '';
  }
  return (
    <StyledpCartPriceContainer>
      <StyledCardPrice>
        {currentPrice}
        {currencyCode}
      </StyledCardPrice>
      <StyledCardDiscountPrice>{priceWithoutDiscount}</StyledCardDiscountPrice>
    </StyledpCartPriceContainer>
  );
}
