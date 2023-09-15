/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import { AmountController } from '../amountController';
import {
  StyledCartProductDescription,
  StyledCartProductTitle,
  StyledCartText,
} from './style';
import { ICartCardProps } from '../../../../types';

export function TextBlock({ cardData }: ICartCardProps) {
  const { title, attributes, quantity } = cardData || {};
  console.log(title);
  console.log({ attributes });

  return (
    <StyledCartProductDescription>
      <StyledCartProductTitle>{title}</StyledCartProductTitle>
      <div>
        {attributes?.map((attribute, index) => (
          <StyledCartText key={index + Math.random()}>
            {attribute.name}: {attribute.value.label}
          </StyledCartText>
        ))}
      </div>
      <AmountController quantity={quantity} />
    </StyledCartProductDescription>
  );
}
