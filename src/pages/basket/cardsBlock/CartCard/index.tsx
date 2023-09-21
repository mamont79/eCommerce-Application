import {
  StyledCardInfoWrapper,
  StyledCartCardWrapper,
  StyledDeleteCartItemBtn,
  StyledImgWrapper,
  StyledPriceWrapper,
} from './style';
import { TextBlock } from './components/TextBlock';
import { PriceBlock } from './components/PriceBlock';
import { ICartCardProps } from '../../types';
import { IRemoveProduct } from '../../../../api/cart/removeProductFromCart';
import {
  deleteAnonimousCartProduct,
  deleteCartProduct,
} from '../../../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

export function CartCard({ cardData }: ICartCardProps) {
  const {
    lineItemId,
    imgUrl,
    title,
    attributes,
    quantity,
    productPriceInCents,
    productDiscountedPriceInCents,
    currencyCode,
  } = cardData || {};
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const { isAuth } = useAppSelector((state) => state.users);
  const cartData: IRemoveProduct = {
    cartId: cart?.id,
    cartVersion: cart?.version,
    lineItemId,
  };

  const handleDeleteCartItem = () => {
    if (isAuth) dispatch(deleteCartProduct(cartData));
    else dispatch(deleteAnonimousCartProduct(cartData));
  };

  return (
    <StyledCartCardWrapper id={lineItemId}>
      <StyledCardInfoWrapper>
        <StyledImgWrapper style={{ backgroundImage: `url(${imgUrl})` }} />
        <TextBlock cardData={{ title, attributes, quantity }} />
      </StyledCardInfoWrapper>
      <StyledPriceWrapper>
        <PriceBlock
          cardData={{
            productPriceInCents,
            productDiscountedPriceInCents,
            currencyCode,
          }}
        />
        <StyledDeleteCartItemBtn onClick={handleDeleteCartItem} />
      </StyledPriceWrapper>
    </StyledCartCardWrapper>
  );
}
