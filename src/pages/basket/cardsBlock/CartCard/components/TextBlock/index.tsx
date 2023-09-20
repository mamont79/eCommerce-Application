/* eslint-disable react/no-array-index-key */

import { AmountController } from '../amountController';
import {
  StyledCartProductDescription,
  StyledCartProductTitle,
  StyledCartText,
} from './style';
import { ICartCardProps } from '../../../../types';

export function TextBlock({ cardData }: ICartCardProps) {
  const { lineItemId, title, attributes, quantity } = cardData || {};

  return (
    <StyledCartProductDescription>
      <StyledCartProductTitle>{title}</StyledCartProductTitle>
      <div>
        {attributes?.map((attribute) => (
          <StyledCartText key={`${title}${attribute.name}`}>
            {attribute.name}: {attribute.value.label}
          </StyledCartText>
        ))}
      </div>
      <AmountController cardData={{ lineItemId, quantity }} />
    </StyledCartProductDescription>
  );
}
