/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { StyledBtn } from '../../components/styledBtn';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import handleSayHello from './helpers/hello';
import {
  StyledDiscontCode,
  StyledDiscountAmount,
  StyledDiscountCard,
  StyledDiscountCardsWrapper,
  StyledDiscountDescription,
  StyledMainSlogon,
  StyledWelcomeContainer,
  StyledWelcomeWrapper,
} from './style';
import { fetchDiscountCodes } from '../../features/discount/discountSlice';
import { fetchMeActiveCart } from '../../features/cart/cartSlice';
// import { getMyActiveCart } from '../../api/cart/getMyActiveCart';

export default function Welcome() {
  const dispatch = useAppDispatch();
  const { discountData } = useAppSelector((state) => state.discount);
  const { cartFields } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchMeActiveCart());
    dispatch(fetchDiscountCodes());
  }, []);

  useEffect(() => {
    if (!cartFields) dispatch(fetchMeActiveCart());
  }, [cartFields]);

  return (
    <StyledWelcomeWrapper>
      <StyledWelcomeContainer>
        <StyledMainSlogon>Your Lazy Zone - for Lazy Shopping</StyledMainSlogon>
        <StyledDiscountCardsWrapper>
          {discountData.map((element) => (
            <StyledDiscountCard key={element.id}>
              <StyledDiscontCode>{element.code}</StyledDiscontCode>
              <StyledDiscountAmount>
                {element.description.pl}
              </StyledDiscountAmount>
              <StyledDiscountDescription>
                {element.description['en-US']}
              </StyledDiscountDescription>
            </StyledDiscountCard>
          ))}
        </StyledDiscountCardsWrapper>
        <StyledBtn onClick={handleSayHello}>Say hi</StyledBtn>
      </StyledWelcomeContainer>
    </StyledWelcomeWrapper>
  );
}
