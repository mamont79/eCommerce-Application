import { Link } from 'react-router-dom';
import {
  StyledContainerForUserControlsLinks,
  StyledSecondHeaderRow,
  StyledTextLink,
} from './header';
import LazzoneIconSvg from '../../assets/lazzoneIcon';
import UserSearchInput from './userSearchInput';

export default function UserControls() {
  return (
    <StyledSecondHeaderRow>
      <Link to="/">
        <LazzoneIconSvg />
      </Link>

      <UserSearchInput />

      <StyledContainerForUserControlsLinks>
        <Link to="/top">
          <StyledTextLink>TOP</StyledTextLink>
        </Link>
        <Link to="/sales">
          <StyledTextLink>Sales</StyledTextLink>
        </Link>
        <Link to="/catalog">
          <StyledTextLink>Catalog</StyledTextLink>
        </Link>
      </StyledContainerForUserControlsLinks>
    </StyledSecondHeaderRow>
  );
}
