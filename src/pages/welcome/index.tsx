/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

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

export default function Welcome() {
  const dispatch = useAppDispatch();
  const { discountData } = useAppSelector((state) => state.discount);

  useEffect(() => {
    dispatch(fetchDiscountCodes());
  }, []);

  console.log(discountData);

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
