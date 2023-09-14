import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMeActiveCart } from '../../features/cart/cartSlice';
import { StyledPageContentWrapper } from './style';
import { CartCardsBlock } from './CartCardsBlock';

export default function Basket() {
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.cart);
  useEffect(() => {
    if (!cart) dispatch(fetchMeActiveCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const goodsData = cart?.lineItems;

  return (
    <StyledPageContentWrapper>
      <h1>Cart</h1>
      {goodsData && goodsData.length && (
        <div>
          <CartCardsBlock goodsData={goodsData} />
          {/* <TotalPriceBlock /> */}
        </div>
      )}
    </StyledPageContentWrapper>
  );
}
