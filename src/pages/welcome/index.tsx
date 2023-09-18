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
import { DiscountType } from '../../features/discount/types';

export default function Welcome() {
  const dispatch = useAppDispatch();
  const { discountData } = useAppSelector((state) => state.discount);

  useEffect(() => {
    dispatch(fetchMeActiveCart());
    dispatch(fetchDiscountCodes());
  }, []);

  return (
    <StyledWelcomeWrapper>
      <StyledWelcomeContainer>
        <StyledMainSlogon>Your Lazy Zone - for Lazy Shopping</StyledMainSlogon>
        <StyledDiscountCardsWrapper>
          {discountData.map(({ id, code, description }: DiscountType) => (
            <StyledDiscountCard key={id}>
              <StyledDiscontCode>{code}</StyledDiscontCode>
              <StyledDiscountAmount>{description.pl}</StyledDiscountAmount>
              <StyledDiscountDescription>
                {description['en-US']}
              </StyledDiscountDescription>
            </StyledDiscountCard>
          ))}
        </StyledDiscountCardsWrapper>
        <StyledBtn onClick={handleSayHello}>Say hi</StyledBtn>
      </StyledWelcomeContainer>
    </StyledWelcomeWrapper>
  );
}
