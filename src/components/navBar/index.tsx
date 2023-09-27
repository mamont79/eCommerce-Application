import NavigationLinks from './FirstHeaderRow/navigationLinks';
import { StyledWraperHeader } from './style';
import UserControls from './SecondHeaderRow/userControls';

export default function NavBar() {
  return (
    <StyledWraperHeader>
      <NavigationLinks />
      <UserControls />
    </StyledWraperHeader>
  );
}
