import {
  StyledCardDiscountPrice,
  StyledCardPrice,
} from '../../../../../../components/card/style';
import { ICartCardProps } from '../../../../types';
import { StyledpCartPriceContainer } from './style';

export function PriceBlock({ cardData }: ICartCardProps) {
  const { currencyCode } = cardData;
  let currentPrice: number | string = '';
  let priceWithoutDiscount: number | string = '';

  if (cardData.productPriceInCents) {
    currentPrice = cardData.productDiscountedPriceInCents
      ? cardData.productDiscountedPriceInCents / 100
      : cardData.productPriceInCents / 100;
    priceWithoutDiscount = cardData.productDiscountedPriceInCents
      ? `${cardData.productPriceInCents / 100} ${currencyCode}`
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
