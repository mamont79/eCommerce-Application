import {
  StyledCardInfoWrapper,
  StyledCartCardWrapper,
  StyledDeleteCartItemBtn,
  StyledImgWrapper,
  StyledPriceWrapper,
} from './style';
import { TextBlock } from './components/TextBlock';
import { PriceBlock } from './components/PriceBlock';
import { ICartCardProps } from '../../types';

export function CartCard({ CardProps }: ICartCardProps) {
  const {
    imgUrl,
    title,
    attributes,
    quantity,
    productPriceInCents,
    productDiscountedPriceInCents,
    currencyCode,
  } = CardProps || {};

  return (
    <StyledCartCardWrapper>
      <StyledCardInfoWrapper>
        <StyledImgWrapper style={{ backgroundImage: `url(${imgUrl})` }} />
        <TextBlock CardProps={{ title, attributes, quantity }} />
      </StyledCardInfoWrapper>
      <StyledPriceWrapper>
        <PriceBlock
          CardProps={{
            productPriceInCents,
            productDiscountedPriceInCents,
            currencyCode,
          }}
        />
        <StyledDeleteCartItemBtn />
      </StyledPriceWrapper>
    </StyledCartCardWrapper>
  );
}
