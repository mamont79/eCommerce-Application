import { LineItem } from '@commercetools/platform-sdk';
import {
  StyledCardInfoWrapper,
  StyledCartCardWrapper,
  StyledDeleteCartItemBtn,
  StyledImgWrapper,
  StyledPriceWrapper,
} from './style';
import { TextBlock } from './components/TextBlock';
import { PriceBlock } from './components/PriceBlock';

export function CartCard({
  lineItem: { variant, name, price },
}: {
  lineItem: LineItem;
}) {
  const { images } = variant;
  const img = images && images.length ? images[0].url : '';
  return (
    <StyledCartCardWrapper>
      <StyledCardInfoWrapper>
        <StyledImgWrapper style={{ backgroundImage: `url(${img})` }} />
        <TextBlock textData={{ name, variant }} />
      </StyledCardInfoWrapper>
      <StyledPriceWrapper>
        <PriceBlock price={price} />
        <StyledDeleteCartItemBtn />
      </StyledPriceWrapper>
    </StyledCartCardWrapper>
  );
}
