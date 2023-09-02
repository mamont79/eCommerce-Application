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
import { Product } from './types';

export default function Card({ product }: { product: Product }) {
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

  return (
    <StyledCard>
      <StyledCardLink to="/product" id={id}>
        <StyledCardSale $discount={!!discountPrice}>
          <p>{discount}%</p>
        </StyledCardSale>
        <StyledCardImg src={img} />
      </StyledCardLink>

      <StyledCardInfo>
        <StyledCardLink to="/product">
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledCardDiscription>{description}</StyledCardDiscription>
          <StyledCardPriceContainer>
            <StyledCardPrice>
              {cost} {currency}
            </StyledCardPrice>
            <StyledCardDiscountPrice>{fullPrice}</StyledCardDiscountPrice>
          </StyledCardPriceContainer>
        </StyledCardLink>

        <StyledCardBtn $primary>Add to cart</StyledCardBtn>
      </StyledCardInfo>
    </StyledCard>
  );
}
