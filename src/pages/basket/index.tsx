/* eslint-disable no-console */
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMeActiveCart } from '../../features/cart/cartSlice';
import { StyledPageContentWrapper } from './style';

export default function Basket() {
  const dispatch = useAppDispatch();
  const { cartFields, message } = useAppSelector((state) => state.cart);

  console.log(`Error message: ${message}`);
  console.log(`Cart fields data:`);
  console.log(cartFields);

  useEffect(() => {
    if (!cartFields) dispatch(fetchMeActiveCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartFields]);

  return (
    <StyledPageContentWrapper>
      <h1>Cart</h1>
    </StyledPageContentWrapper>
  );
}
