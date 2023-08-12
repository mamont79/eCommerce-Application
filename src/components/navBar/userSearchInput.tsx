import { SearchWrapper, SearchInput, SearchButton } from './inputStyle';

export default function UserSearchInput() {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder="Search" />
      <SearchButton>Search</SearchButton>
    </SearchWrapper>
  );
}
