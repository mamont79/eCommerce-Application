/* eslint-disable no-console */
import { AmountController } from '../amountController';
import {
  StyledCartProductDescription,
  StyledCartProductTitle,
  StyledCartText,
} from './style';
import { ICartCardProps } from '../../../../types';

export function TextBlock({ CardProps }: ICartCardProps) {
  const { title, attributes, quantity } = CardProps || {};
  console.log(title);
  console.log(attributes);

  return (
    <StyledCartProductDescription>
      <StyledCartProductTitle>{title}</StyledCartProductTitle>
      <div>
        <StyledCartText>color: green</StyledCartText>
        <StyledCartText>size: xxl</StyledCartText>
      </div>
      <AmountController quantity={quantity} />
    </StyledCartProductDescription>
  );
}
