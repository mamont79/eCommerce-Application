/* eslint-disable no-console */
import { LineItem } from '@commercetools/platform-sdk';
import { AmountController } from '../amountController';
import {
  StyledCartProductAttribute,
  StyledCartProductDescription,
  StyledCartProductTitle,
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
        <StyledCartProductAttribute>color: green</StyledCartProductAttribute>
        <StyledCartProductAttribute>size: xxl</StyledCartProductAttribute>
      </div>
      <AmountController />
    </StyledCartProductDescription>
  );
}
