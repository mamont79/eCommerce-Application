import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMeActiveCart } from '../../features/cart/cartSlice';
import { StyledBasketCardsWrapper, StyledPageContentWrapper } from './style';
import { EmptyCart, notEmptyCart } from '../../components/emptyCart';
import { StyledPageContentWrapper } from './style';

export default function Basket() {
  const dispatch = useAppDispatch();
  const { cartFields } = useAppSelector((state) => state.cart);

  const { cart } = useAppSelector((state) => state.cart);

  // eslint-disable-next-line no-console
  console.log(cartFields);
  useEffect(() => {
    if (!cartFields) dispatch(fetchMeActiveCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartFields]);
  
  const cartMassage = cart ? notEmptyCart() : EmptyCart();
  const goods = cart?.lineItems;

  return (
    <StyledPageContentWrapper>
      {cartMassage}
      <StyledBasketCardsWrapper>
        {goods && goods.map(makeCard)}
      </StyledBasketCardsWrapper>
    </StyledPageContentWrapper>
  );
}
