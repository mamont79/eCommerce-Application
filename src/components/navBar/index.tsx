import { StyledWraperHeader } from './header';
import NavigationLinks from './navigationLinks';
import UserControls from './userControls';

export default function NavBar() {
  return (
    <StyledWraperHeader>
      <NavigationLinks />
      <UserControls />
    </StyledWraperHeader>
  );
}
