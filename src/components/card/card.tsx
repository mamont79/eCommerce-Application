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
import { CardData } from './types';

export default function Card(props: CardData) {
  const { img, title, discription, price, discountPrice, currency } = props;
  const cost = discountPrice || price;
  const discontCost = discountPrice ? `${price / 100} ${currency}` : '';
  const sale = discountPrice
    ? `${Math.round((1 - discountPrice / price) * 100)}`
    : '';

  // const [cost, discontCost, sale] = discountPrice
  //   ? [
  //       discountPrice,
  //       `${price / 100} ${currency}`,
  //       `${Math.round((1 - discountPrice / price) * 100)}`,
  //     ]
  //   : [price, '', ''];

  return (
    <StyledCard>
      <StyledCardLink to="/product">
        <StyledCardSale $discount={!!discountPrice}>
          <p>{sale}%</p>
        </StyledCardSale>
        <StyledCardImg src={img} />
      </StyledCardLink>

      <StyledCardInfo>
        <StyledCardLink to="/product">
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledCardDiscription>{discription}</StyledCardDiscription>
          <StyledCardPriceContainer>
            <StyledCardPrice>
              {cost / 100} {currency}
            </StyledCardPrice>
            <StyledCardDiscountPrice>{discontCost}</StyledCardDiscountPrice>
          </StyledCardPriceContainer>
        </StyledCardLink>

        <StyledCardBtn $primary>Add to cart</StyledCardBtn>
      </StyledCardInfo>
    </StyledCard>
  );
}
