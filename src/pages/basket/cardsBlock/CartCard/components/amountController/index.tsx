import { useState } from 'react';
import {
  StyledCountButton,
  StyledCountInput,
  StyledCountWrapper,
} from './style';
import { IChangeProductQuantity } from '../../../../../../api/cart/changeProductQuanity';
import { changeProductCartQuantity } from '../../../../../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../../../../store/hooks';
import { ICartCardProps } from '../../../../types';

export function AmountController({ cardData }: ICartCardProps) {
  const { lineItemId, quantity } = cardData;
  const [amount, setAmount] = useState<number>(quantity || 1);
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const cartData: IChangeProductQuantity = {
    cartId: cart?.id,
    cartVersion: cart?.version,
    lineItemId,
    newQuantity: amount,
  };

  const increaseByOne = () => {
    setAmount(amount + 1);
    dispatch(
      changeProductCartQuantity({ ...cartData, newQuantity: amount + 1 })
    );
  };

  const decreaseByOne = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      dispatch(
        changeProductCartQuantity({ ...cartData, newQuantity: amount - 1 })
      );
    }
  };

  return (
    <StyledCountWrapper>
      <StyledCountButton type="button" onClick={decreaseByOne}>
        -
      </StyledCountButton>
      <StyledCountInput type="number" value={amount} disabled />
      <StyledCountButton type="button" onClick={increaseByOne}>
        +
      </StyledCountButton>
    </StyledCountWrapper>
  );
}
