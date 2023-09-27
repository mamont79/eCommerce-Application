import {
  fetchProductToAnonimousCart,
  fetchProductToMyCart,
} from '../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  StyledCard,
  StyledCardBtn,
  StyledCardDiscountPrice,
  StyledCardDiscription,
  StyledCardImg,
  StyledCardInfo,
  StyledCardLink,
  StyledCardPrice,
  StyledCardPriceContainer,
  StyledCardSale,
  StyledCardTitle,
} from './style';
import { CardProps } from './types';

export default function Card({ product }: CardProps) {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const { isAuth } = useAppSelector((state) => state.users);

  const {
    id,
    img,
    title,
    description,
    price,
    discountPrice,
    discount,
    currency,
  } = product;
  const cost = discountPrice || price;
  const fullPrice = discountPrice ? `${price} ${currency}` : '';
  const productUrl = `/catalog/${title.toLowerCase().split(' ').join('-')}`;

  let isInCart = false;
  if (cart) {
    isInCart =
      cart.lineItems.find(({ productId }) => productId === id) !== undefined;
  }

  const handleAddProductBtnClick = () => {
    const addProductData = {
      cartId: cart!.id,
      cartVersion: cart!.version,
      productId: id,
      productVariantId: 1,
    };
    if (isAuth) dispatch(fetchProductToMyCart(addProductData));
    else dispatch(fetchProductToAnonimousCart(addProductData));
  };

  return (
    <StyledCard>
      <StyledCardLink to={productUrl} id={id}>
        <StyledCardSale $discount={!!discountPrice}>
          <p>{discount}%</p>
        </StyledCardSale>
        <StyledCardImg src={img} />
      </StyledCardLink>

      <StyledCardInfo>
        <StyledCardLink to={productUrl}>
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledCardDiscription>{description}</StyledCardDiscription>
          <StyledCardPriceContainer>
            <StyledCardPrice>
              {cost} {currency}
            </StyledCardPrice>
            <StyledCardDiscountPrice>{fullPrice}</StyledCardDiscountPrice>
          </StyledCardPriceContainer>
        </StyledCardLink>

        <StyledCardBtn
          disabled={isInCart}
          onClick={handleAddProductBtnClick}
          $primary
        >
          Add to cart
        </StyledCardBtn>
      </StyledCardInfo>
    </StyledCard>
  );
}
