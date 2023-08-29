import Card from '../../components/card/card';
import { StyledBtn } from '../../components/styledBtn';
import { LoginLink } from '../login/style';
import handleSayHello from './helpers/hello';
import {
  StyledCardsWrapper,
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

        <StyledCardsWrapper>
          <Card
            img="https://www.schoolsw3.com/w3images/jeans3.jpg"
            title="violeta"
            discription="Женская одежда/Женские юбкyberhjvbeufnhgrbevjekbи"
            price={36998}
            currency="EUR"
          />
          <Card
            img="https://www.schoolsw3.com/w3images/jeans3.jpg"
            title="violeta"
            discription="Женская одежда/Женские юбки"
            price={36998}
            currency="EUR"
            discountPrice={32000}
          />
          <Card
            img="https://www.schoolsw3.com/w3images/jeans3.jpg"
            title="violeta"
            discription="Женская одежда/Женские юбки"
            price={36998}
            currency="EUR"
            discountPrice={33298}
          />
        </StyledCardsWrapper>
      </StyledWelcomeContainer>
    </StyledWelcomeWrapper>
  );
}
