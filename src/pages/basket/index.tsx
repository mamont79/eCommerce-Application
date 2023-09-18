import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMeActiveCart } from '../../features/cart/cartSlice';
import { StyledCartContainer, StyledPageContentWrapper } from './style';
import { CartCardsBlock } from './cardsBlock';
import Order from './orderBlock';
import { EmptyCart } from '../../components/emptyCart';

export default function Basket() {
  const dispatch = useAppDispatch();
  const { cartFields } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (!cartFields) dispatch(fetchMeActiveCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartFields]);

  return (
    <StyledPageContentWrapper>
      {!cartFields?.items.length && <EmptyCart />}

      <StyledCartContainer>
        {!!cartFields?.items.length && (
          <CartCardsBlock goodsData={cartFields} />
        )}
        {!!cartFields?.items.length && <Order />}
      </StyledCartContainer>
    </StyledPageContentWrapper>
  );
}
