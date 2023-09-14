import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMeActiveCart } from '../../features/cart/cartSlice';
import { StyledPageContentWrapper } from './style';

export default function Basket() {
  const dispatch = useAppDispatch();
  const { cartFields } = useAppSelector((state) => state.cart);

  // eslint-disable-next-line no-console
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
