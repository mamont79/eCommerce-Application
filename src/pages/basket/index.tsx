import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMeActiveCart } from '../../features/cart/cartSlice';
import { StyledBasketCardsWrapper, StyledPageContentWrapper } from './style';
import { EmptyCart, notEmptyCart } from '../../components/emptyCart';
import { StyledPageContentWrapper } from './style';
import { CartCardsBlock } from './CartCardsBlock';

export default function Basket() {
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (!cart) dispatch(fetchMeActiveCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
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
