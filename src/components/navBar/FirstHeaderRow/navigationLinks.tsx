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
      IconTag: <BasketSvg color="#FFA555" />,
      label: 'Cart',
      visibility: true,
    },
    {
      link: '/aboutus',
      IconTag: <TeamIconSvg color="#FFA555" />,
      label: 'About Us',
      visibility: true,
    },
    {
      link: '/profile',
      IconTag: <UserIconSvg color="#FFA555" />,
      label: 'Account',
      visibility: Boolean(user),
    },
    {
      link: route,
      IconTag: <DoorSvg color="#FFA555" />,
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
          {menuLinks.map(({ link, IconTag, label, visibility }) => (
            <StyledMenuLinkContainer key={label} $isVisible={visibility}>
              <StyleMenuLink to={link}>
                {IconTag}
                <StyledMenuLinkLabel>{label}</StyledMenuLinkLabel>
              </StyleMenuLink>
            </StyledMenuLinkContainer>
          ))}
        </StyledNavigation>
      </StyledCenteredContentContainer>
    </StyledFirstHeaderRow>
  );
}
