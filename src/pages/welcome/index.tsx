/* eslint-disable no-console */

import { useEffect } from 'react';
import { StyledBtn } from '../../components/styledBtn';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { StyledCardsWrapper } from '../catalog/style';
import { LoginLink } from '../login/style';
import handleSayHello from './helpers/hello';
import {
  StyledLinksWrapper,
  StyledWelcomeContainer,
  StyledWelcomeWrapper,
} from './style';
import { fetchDiscountCodes } from '../../features/discount/discountSlice';

export default function Welcome() {
  const dispatch = useAppDispatch();
  const { discountData } = useAppSelector((state) => state.discount);

  useEffect(() => {
    dispatch(fetchDiscountCodes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(discountData);

  return (
    <StyledWelcomeWrapper>
      <StyledWelcomeContainer>
        <h1>Your Lazy Zone - for Lazy Shopping</h1>
        <StyledBtn onClick={handleSayHello}>Say hi</StyledBtn>

        <StyledLinksWrapper>
          <LoginLink to="/registration">Registration</LoginLink>
          <LoginLink to="/login">Login</LoginLink>
        </StyledLinksWrapper>

        <StyledCardsWrapper />
      </StyledWelcomeContainer>
    </StyledWelcomeWrapper>
  );
}
