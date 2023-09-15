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

export function CartCard({ cardData }: ICartCardProps) {
  const {
    imgUrl,
    title,
    attributes,
    quantity,
    productPriceInCents,
    productDiscountedPriceInCents,
    currencyCode,
  } = cardData || {};

  return (
    <StyledCartCardWrapper>
      <StyledCardInfoWrapper>
        <StyledImgWrapper style={{ backgroundImage: `url(${imgUrl})` }} />
        <TextBlock cardData={{ title, attributes, quantity }} />
      </StyledCardInfoWrapper>
      <StyledPriceWrapper>
        <PriceBlock
          cardData={{
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
