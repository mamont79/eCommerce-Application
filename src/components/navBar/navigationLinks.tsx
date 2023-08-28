import { Link } from 'react-router-dom';
import { StyledFirstHeaderRow } from './header';
import BasketSvg from '../../assets/basketIcon';
import DoorSvg from '../../assets/doorIcon';
import { StyledGreeting, StyledNavigation } from './style';
import { useAppSelector } from '../../store/hooks';
import { CustomerProfileLink } from './CustomerProfileLink';

export default function NavigationLinks() {
  const { user } = useAppSelector((state) => state.users);
  const loginLogout = user === null ? '/login' : '/logout';
  return (
    <StyledFirstHeaderRow>
      <StyledGreeting>
        {user?.customer.firstName} {user?.customer.lastName}
      </StyledGreeting>
      <StyledNavigation>
        <Link to="/">
          <BasketSvg color="#FFA555" />
        </Link>
        <CustomerProfileLink isVisible={user !== null} />
        <Link to={loginLogout}>
          <DoorSvg color="#FFA555" />
        </Link>
      </StyledNavigation>
    </StyledFirstHeaderRow>
  );
}
