import { useState } from 'react';
import {
  StyledCountButton,
  StyledCountInput,
  StyledCountWrapper,
} from './style';
import { IChangeProductQuantity } from '../../../../../../api/cart/changeProductQuanity';
import {
  changeProductCartQuantity,
  fetchChangeProductQuantityInAnonimousCart,
} from '../../../../../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../../../../store/hooks';
import { ICartCardProps } from '../../../../types';

export function AmountController({ cardData }: ICartCardProps) {
  const { lineItemId, quantity } = cardData;
  const [amount, setAmount] = useState<number>(quantity || 1);
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const { isAuth } = useAppSelector((state) => state.users);
  const cartData: IChangeProductQuantity = {
    cartId: cart?.id,
    cartVersion: cart?.version,
    lineItemId,
    newQuantity: amount,
  };

  const increaseByOne = () => {
    const newQuantity = amount + 1;
    setAmount(newQuantity);
    const newData = {
      ...cartData,
      newQuantity,
    };
    if (isAuth) {
      dispatch(changeProductCartQuantity(newData));
    } else {
      dispatch(fetchChangeProductQuantityInAnonimousCart(newData));
    }
  };

  const decreaseByOne = () => {
    const newQuantity = amount - 1;
    setAmount(newQuantity);
    const newData = {
      ...cartData,
      newQuantity,
    };
    if (isAuth) {
      dispatch(changeProductCartQuantity(newData));
    } else {
      dispatch(fetchChangeProductQuantityInAnonimousCart(newData));
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
