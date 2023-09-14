import { Link } from 'react-router-dom';
import { StyledMenuLinkContainer } from '../navBar/style';
import {
  StyledEmptyCartTitle,
  StyledEmptyCartWrapper,
  StyledMessageEmptyCart,
  StyledNotEmptyCart,
} from './style';
import BoySearchingSvg from '../../assets/boySearchingIcon';

export function EmptyCart() {
  return (
    <StyledEmptyCartWrapper>
      <StyledEmptyCartTitle>
        It seems like your cart is empty
      </StyledEmptyCartTitle>
      <Link to="/catalog">
        <StyledMenuLinkContainer>
          <BoySearchingSvg />
        </StyledMenuLinkContainer>
      </Link>
      <StyledMessageEmptyCart>
        Click on Boy. He will help you find amazing things
      </StyledMessageEmptyCart>
    </StyledEmptyCartWrapper>
  );
}

export function notEmptyCart() {
  return (
    <StyledNotEmptyCart>
      Maybe you want to change something in your cart?
    </StyledNotEmptyCart>
  );
}
