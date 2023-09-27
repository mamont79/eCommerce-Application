import { Link } from 'react-router-dom';
import { StyledMenuLinkContainer } from '../navBar/style';
import {
  StyledEmptyCartTitle,
  StyledEmptyCartWrapper,
  StyledMessageEmptyCart,
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
