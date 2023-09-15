/* eslint-disable react/jsx-no-bind */
import { ChangeEvent, useState } from 'react';
import {
  StyledCountButton,
  StyledCountInput,
  StyledCountWrapper,
} from './style';
import { ICartItem } from '../../../../types';

export function AmountController({ quantity }: ICartItem) {
  const [amount, setAmount] = useState<number>(1);

  if (quantity !== undefined) {
    // setAmount(quantity)
  }
  function increaseByOne() {
    setAmount(amount + 1);
  }

  function decreaseByOne() {
    setAmount(amount - 1);
  }

  function handleChange(e: ChangeEvent) {
    // eslint-disable-next-line no-console
    console.log(e);
  }

  return (
    <StyledCountWrapper>
      <StyledCountButton type="button" onClick={decreaseByOne}>
        -
      </StyledCountButton>
      <StyledCountInput type="number" value={1} onChange={handleChange} />
      <StyledCountButton type="button" onClick={increaseByOne}>
        +
      </StyledCountButton>
    </StyledCountWrapper>
  );
}
