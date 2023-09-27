import BurgerMenuSvg from '../../../assets/burgerMenu';
import {
  StyledBurgerMenu,
  StyledBurgerDropdownContent,
  StyledBurgerMenuLink,
  StyledContainerForUserControlsLinks,
  StyledTextLink,
} from '../style';

const MENU_LINK_DATA = [
  { path: '/catalog', value: 'Woman' },
  { path: '/catalog', value: 'Man' },
  { path: '/catalog', value: 'Kids' },
  { path: '/top', value: 'TOP' },
  { path: '/sales', value: 'Sales' },
  { path: '/catalog', value: 'Catalog' },
];

function BurgerMenu() {
  return (
    <StyledBurgerMenu>
      <BurgerMenuSvg color="#FFA555" />
      <StyledBurgerDropdownContent>
        {MENU_LINK_DATA.map(({ path, value }) => (
          <StyledBurgerMenuLink key={value} to={path}>
            {value}
          </StyledBurgerMenuLink>
        ))}
      </StyledBurgerDropdownContent>
    </StyledBurgerMenu>
  );
}

function CategoryMenuLinks() {
  return (
    <StyledContainerForUserControlsLinks>
      {MENU_LINK_DATA.slice(0, 3).map(({ path, value }) => (
        <StyledTextLink key={value} to={path}>
          {value}
        </StyledTextLink>
      ))}
    </StyledContainerForUserControlsLinks>
  );
}

function OfferMenuLinks() {
  return (
    <StyledContainerForUserControlsLinks>
      {MENU_LINK_DATA.slice(3).map(({ path, value }) => (
        <StyledTextLink key={value} to={path}>
          {value}
        </StyledTextLink>
      ))}
    </StyledContainerForUserControlsLinks>
  );
}

export { BurgerMenu, CategoryMenuLinks, OfferMenuLinks };
