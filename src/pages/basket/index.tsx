import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMeActiveCart } from '../../features/cart/cartSlice';
// import { StyledBasketCardsWrapper} from './style';
import { EmptyCart, notEmptyCart } from '../../components/emptyCart';
import { StyledCartContainer, StyledPageContentWrapper } from './style';
import { CartCardsBlock } from './cardsBlock';
import Order from './orderBlock';

export default function Basket() {
  const dispatch = useAppDispatch();
  const { cartFields } = useAppSelector((state) => state.cart);

  const { cart } = useAppSelector((state) => state.cart);

  // console.log(`Error message: ${message}, cart fields data: \n${cartFields}`);

  useEffect(() => {
    if (!cartFields) dispatch(fetchMeActiveCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartFields]);

  const cartMassage = cart ? notEmptyCart() : EmptyCart();

  return (
    <StyledPageContentWrapper>
      <h1>Cart</h1>
      {cartMassage}
      <StyledCartContainer>
        {!!cartFields && <CartCardsBlock goodsData={cartFields} />}
        <Order />
      </StyledCartContainer>
    </StyledPageContentWrapper>
  );
}
