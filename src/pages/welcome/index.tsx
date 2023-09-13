import { StyledBtn } from '../../components/styledBtn';
import { StyledCardsWrapper } from '../catalog/style';
import { LoginLink } from '../login/style';
import handleSayHello from './helpers/hello';
import {
  StyledLinksWrapper,
  StyledWelcomeContainer,
  StyledWelcomeWrapper,
} from './style';

export default function Welcome() {
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
