/* eslint-disable no-console */
import { LineItem } from '@commercetools/platform-sdk';
import { AmountController } from '../amountController';
import {
  StyledCartProductDescription,
  StyledCartProductTitle,
  StyledCartText,
} from './style';

export function TextBlock({
  textData: {
    name,
    variant: { attributes },
  },
}: {
  textData: Pick<LineItem, 'name' | 'variant'>;
}) {
  console.log(name);
  console.log(attributes);

  return (
    <StyledCartProductDescription>
      <StyledCartProductTitle>
        Abyr fdsgfj sdhfgxhbvs syfd ygf
      </StyledCartProductTitle>
      <div>
        <StyledCartText>color: green</StyledCartText>
        <StyledCartText>size: xxl</StyledCartText>
      </div>
      <AmountController />
    </StyledCartProductDescription>
  );
}
