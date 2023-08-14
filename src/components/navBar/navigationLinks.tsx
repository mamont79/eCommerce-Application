import { Link } from 'react-router-dom';
import StyledNavigation from './style';
import { StyledFirstHeaderRow } from './header';
import BasketSvg from '../../assets/basketIcon';
import DoorSvg from '../../assets/doorIcon';
import UserIconSvg from '../../assets/userIcon';

export default function NavigationLinks() {
  return (
    <StyledFirstHeaderRow>
      <StyledNavigation>
        <Link to="/">
          <BasketSvg color="#FFA555" />
        </Link>
        <Link to="/registration">
          <UserIconSvg color="#FFA555" />
        </Link>
        <Link to="/login">
          <DoorSvg color="#FFA555" />
        </Link>
      </StyledNavigation>
    </StyledFirstHeaderRow>
  );
}
