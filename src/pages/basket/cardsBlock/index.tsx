import { StyledCartCardsBlockWrapper } from './style';
import { CartCard } from './CartCard';
import { StyledEmptyCartContainer } from '../style';
import { StyledDeleteCartItemBtn } from './CartCard/style';
import { StyledCartText } from './CartCard/components/TextBlock/style';
import { ICartFields } from '../types';
import {
  deleteMeActiveCart,
  fetchDeleteAnonimousCart,
} from '../../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { IDeleteMyCart } from '../../../api/cart/deleteMyCart';

export function CartCardsBlock({ goodsData }: { goodsData: ICartFields }) {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const { isAuth } = useAppSelector((state) => state.users);
  const cartData: IDeleteMyCart = {
    cartId: cart?.id,
    myCartVersion: cart?.version,
  };

  const handleEmptyCart = () => {
    if (isAuth) {
      dispatch(deleteMeActiveCart(cartData));
    } else {
      dispatch(fetchDeleteAnonimousCart(cartData));
    }
  };

  return (
    <StyledCartCardsBlockWrapper>
      <StyledEmptyCartContainer>
        <StyledDeleteCartItemBtn onClick={handleEmptyCart} />
        <StyledCartText>Empty shopping cart</StyledCartText>
      </StyledEmptyCartContainer>
      {goodsData.items.map((item) => (
        <CartCard cardData={item} key={item.title} />
      ))}
    </StyledCartCardsBlockWrapper>
  );
}
