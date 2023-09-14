import { LineItem } from '@commercetools/platform-sdk';
import {
  StyledCartCardWrapper,
  StyledDeleteCartItemBtn,
  StyledImgWrapper,
} from './style';
import { TextBlock } from './components/TextBlock';
import { AmountController } from './components/AmountController';
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
      <input type="checkbox" />
      <StyledImgWrapper style={{ backgroundImage: `url(${img})` }} />
      <div>
        <TextBlock textData={{ name, variant }} />
        <AmountController />
      </div>
      <div>
        <PriceBlock price={price} />
        <StyledDeleteCartItemBtn />
      </div>
    </StyledCartCardWrapper>
  );
}
