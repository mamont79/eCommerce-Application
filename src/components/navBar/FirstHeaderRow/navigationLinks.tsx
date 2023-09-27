import { Link } from 'react-router-dom';

import BasketSvg from '../../../assets/basketIcon';
import DoorSvg from '../../../assets/doorIcon';
import { useAppSelector } from '../../../store/hooks';
import LazzoneIconSvg from '../../../assets/lazzoneIcon';
import {
  StyleMenuLink,
  StyledFirstHeaderRow,
  StyledMenuLinkContainer,
  StyledMenuLinkLabel,
  StyledNavigation,
} from '../style';
import { StyledCenteredContentContainer } from '../../contentContainer/contentContainer';
import TeamIconSvg from '../../../assets/teamIcon';
import UserIconSvg from '../../../assets/userIcon';

export default function NavigationLinks() {
  const { user } = useAppSelector((state) => state.users);
  const [route, routeLabel] = !user
    ? ['/login', 'Login']
    : ['/logout', 'Logout'];
  const menuLinks = [
    {
      link: '/basket',
      iconTag: <BasketSvg color="#FFA555" />,
      label: 'Cart',
      visibility: true,
    },
    {
      link: '/aboutus',
      iconTag: <TeamIconSvg color="#FFA555" />,
      label: 'About Us',
      visibility: true,
    },
    {
      link: '/profile',
      iconTag: <UserIconSvg color="#FFA555" />,
      label: 'Account',
      visibility: Boolean(user),
    },
    {
      link: route,
      iconTag: <DoorSvg color="#FFA555" />,
      label: routeLabel,
      visibility: true,
    },
  ];
  return (
    <StyledFirstHeaderRow>
      <StyledCenteredContentContainer>
        <Link to="/">
          <LazzoneIconSvg />
        </Link>
        <StyledNavigation>
          {menuLinks.map(({ link, iconTag, label, visibility }) => (
            <StyledMenuLinkContainer key={label} $isVisible={visibility}>
              <StyleMenuLink to={link}>
                {iconTag}
                <StyledMenuLinkLabel>{label}</StyledMenuLinkLabel>
              </StyleMenuLink>
            </StyledMenuLinkContainer>
          ))}
        </StyledNavigation>
      </StyledCenteredContentContainer>
    </StyledFirstHeaderRow>
  );
}
