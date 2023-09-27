import UserSearchInput from './userSearchInput';
import { StyledCenteredContentContainer } from '../../contentContainer/contentContainer';
import { StyledSecondHeaderRow } from '../style';
import { BurgerMenu, CategoryMenuLinks, OfferMenuLinks } from './menuLinks';

export default function UserControls() {
  return (
    <StyledSecondHeaderRow>
      <StyledCenteredContentContainer>
        <BurgerMenu />
        <CategoryMenuLinks />
        <UserSearchInput />
        <OfferMenuLinks />
      </StyledCenteredContentContainer>
    </StyledSecondHeaderRow>
  );
}
