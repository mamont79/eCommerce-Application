/* eslint-disable no-console */
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMeActiveCart } from '../../features/cart/cartSlice';
import { StyledBasketCardsWrapper, StyledPageContentWrapper } from './style';
import { EmptyCart, notEmptyCart } from '../../components/emptyCart';
import { StyledPageContentWrapper } from './style';
import { StyledCartContainer, StyledPageContentWrapper } from './style';
import { CartCardsBlock } from './cardsBlock';
import Order from './orderBlock';

export default function Basket() {
  const dispatch = useAppDispatch();
  const { cartFields, message } = useAppSelector((state) => state.cart);

  const { cart } = useAppSelector((state) => state.cart);

  // eslint-disable-next-line no-console
  console.log(`Error message: ${message}, cart fields data: \n${cartFields}`);

  useEffect(() => {
    if (!cartFields) dispatch(fetchMeActiveCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartFields]);

  const cartMassage = cart ? notEmptyCart() : EmptyCart();
  const goods = cart?.lineItems;

  return (
    <StyledPageContentWrapper>
      <h1>Cart</h1>
      {cartMassage}
      <StyledCartContainer>
        {goodsData && goodsData.length && (
          <CartCardsBlock goodsData={goodsData} />
        )}
        <Order />
      </StyledCartContainer>
    </StyledPageContentWrapper>
  );
}
