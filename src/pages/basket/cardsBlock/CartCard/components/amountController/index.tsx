/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import {
  StyledCountButton,
  StyledCountInput,
  StyledCountWrapper,
} from './style';
import { ICartItem } from '../../../../types';

export function AmountController({ quantity }: ICartItem) {
  const [amount, setAmount] = useState<number>(quantity || 1);

  function increaseByOne() {
    setAmount(amount + 1);
  }

  function decreaseByOne() {
    setAmount(amount - 1);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAmount(+e.target.value);
  }

  return (
    <StyledCountWrapper>
      <StyledCountButton type="button" onClick={decreaseByOne}>
        -
      </StyledCountButton>
      <StyledCountInput type="number" value={amount} onChange={handleChange} />
      <StyledCountButton type="button" onClick={increaseByOne}>
        +
      </StyledCountButton>
    </StyledCountWrapper>
  );
}