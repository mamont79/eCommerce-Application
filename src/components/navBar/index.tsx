import { Link } from 'react-router-dom';
import StyledNavigation from './style';
import StyledWraperHeader from './header';
import BasketSvg from '../../assets/basketIcon';
import DoorSvg from '../../assets/doorIcon';

export default function NavBar() {
  return (
    <StyledWraperHeader>
      <StyledNavigation>
        <Link to="/">
          <BasketSvg color="#FFA555" />
        </Link>
        <Link to="/login">
          <DoorSvg color="#FFA555" />
        </Link>
      </StyledNavigation>
    </StyledWraperHeader>
  );
}
