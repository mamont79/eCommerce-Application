/* eslint-disable react/jsx-no-bind */
import { ChangeEvent, useState } from 'react';
import {
  StyledCountButton,
  StyledCountInput,
  StyledCountWrapper,
} from './style';

export function AmountController() {
  const [amount, setAmount] = useState<number>(1);

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
      <StyledCountInput type="number" value={amount} onChange={handleChange} />
      <StyledCountButton type="button" onClick={increaseByOne}>
        +
      </StyledCountButton>
    </StyledCountWrapper>
  );
}
