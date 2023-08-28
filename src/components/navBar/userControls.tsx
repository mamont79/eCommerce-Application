import { Link } from 'react-router-dom';
import {
  StyledBurgerDropdownContent,
  StyledBurgerMenu,
  StyledBurgerMenuLinks,
  StyledContainerForUserControlsLinks,
  StyledSecondHeaderRow,
  StyledTextLink,
} from './header';
import UserSearchInput from './userSearchInput';
import BurgerMenuSvg from '../../assets/burgerMenu';
import { StyledCenteredContentContainer } from '../contentContainer/contentContainer';

export default function UserControls() {
  return (
    <StyledSecondHeaderRow>
      <StyledCenteredContentContainer>
        <StyledBurgerMenu>
          <BurgerMenuSvg color="#FFA555" />
          <StyledBurgerDropdownContent>
            <StyledBurgerMenuLinks to="/woman">Woman</StyledBurgerMenuLinks>
            <StyledBurgerMenuLinks to="/man">Man</StyledBurgerMenuLinks>
            <StyledBurgerMenuLinks to="/kids">Kids</StyledBurgerMenuLinks>
            <StyledBurgerMenuLinks to="/top">TOP</StyledBurgerMenuLinks>
            <StyledBurgerMenuLinks to="/sales">Sales</StyledBurgerMenuLinks>
            <StyledBurgerMenuLinks to="/recommendation">
              Best offer
            </StyledBurgerMenuLinks>
          </StyledBurgerDropdownContent>
        </StyledBurgerMenu>

        <StyledContainerForUserControlsLinks>
          <Link to="/woman">
            <StyledTextLink>Woman</StyledTextLink>
          </Link>
          <Link to="/man">
            <StyledTextLink>Man</StyledTextLink>
          </Link>
          <Link to="/kids">
            <StyledTextLink>Kids</StyledTextLink>
          </Link>
        </StyledContainerForUserControlsLinks>

        <UserSearchInput />

        <StyledContainerForUserControlsLinks>
          <Link to="/top">
            <StyledTextLink>TOP</StyledTextLink>
          </Link>
          <Link to="/sales">
            <StyledTextLink>Sales</StyledTextLink>
          </Link>
          <Link to="/recommendation">
            <StyledTextLink>Best offer</StyledTextLink>
          </Link>
        </StyledContainerForUserControlsLinks>
      </StyledCenteredContentContainer>
    </StyledSecondHeaderRow>
  );
}
