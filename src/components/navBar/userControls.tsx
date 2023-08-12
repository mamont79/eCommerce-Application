import { Link } from 'react-router-dom';
import {
  StyledControls,
  StyledSecondHeaderRow,
  StyledTextLink,
} from './header';
import LazzoneIconSvg from '../../assets/lizzonIcon';
import UserSearchInput from './userSearchInput';

export default function UserControls() {
  return (
    <StyledSecondHeaderRow>
      <StyledControls>
        <Link to="/">
          <LazzoneIconSvg />
        </Link>
        <UserSearchInput />
        <Link to="/top">
          <StyledTextLink>TOP</StyledTextLink>
        </Link>
        <Link to="/sales">
          <StyledTextLink>Sales</StyledTextLink>
        </Link>
        <Link to="/recommendation">
          <StyledTextLink>Best offer</StyledTextLink>
        </Link>
      </StyledControls>
    </StyledSecondHeaderRow>
  );
}
