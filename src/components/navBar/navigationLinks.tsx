import { Link } from 'react-router-dom';
import {
  StyledFirstHeaderRow,
  StyledMenuLinkContainer,
  StyledMenuLinkLabel,
} from './header';
import BasketSvg from '../../assets/basketIcon';
import DoorSvg from '../../assets/doorIcon';
import { useAppSelector } from '../../store/hooks';
import { CustomerProfileLink } from './CustomerProfileLink';
import LazzoneIconSvg from '../../assets/lazzoneIcon';
import { StyledNavigation } from './style';
import { StyledCenteredContentContainer } from '../contentContainer/contentContainer';

export default function NavigationLinks() {
  const { user } = useAppSelector((state) => state.users);
  const [route, routeLabel] = !user
    ? ['/login', 'Login']
    : ['/logout', 'Logout'];
  return (
    <StyledFirstHeaderRow>
      <StyledCenteredContentContainer>
        <Link to="/">
          <LazzoneIconSvg />
        </Link>
        <StyledNavigation>
          <Link to="/">
            <StyledMenuLinkContainer>
              <BasketSvg color="#FFA555" />
              <StyledMenuLinkLabel>Cart</StyledMenuLinkLabel>
            </StyledMenuLinkContainer>
          </Link>
          <CustomerProfileLink isVisible={user} />
          <Link to={route}>
            <StyledMenuLinkContainer>
              <DoorSvg color="#FFA555" />
              <StyledMenuLinkLabel>{routeLabel}</StyledMenuLinkLabel>
            </StyledMenuLinkContainer>
          </Link>
        </StyledNavigation>
      </StyledCenteredContentContainer>
    </StyledFirstHeaderRow>
  );
}
