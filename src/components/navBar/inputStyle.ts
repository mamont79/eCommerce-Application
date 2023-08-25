import styled from 'styled-components';
import { StyledBtn } from '../styledBtn';

export const SearchWrapper = styled.div`
  min-width: 280px;
  display: flex;
  flex-wrap: nowrap;
`;

export const SearchInput = styled.input`
  color: #cf844e;
  font-family: Arial;
  font-size: 16px;
  padding: 10px 20px;
  background: none;
  border-radius: 7px;
  border: 1px solid #c4c4c4;
  outline: 0;
  outline-offset: 0;
  border-right: none;
  border-top-right-radius: unset;
  border-bottom-right-radius: unset;

  &:invalid {
    border: solid 2px #e00000;
  }

  &::placeholder {
    color: #000000 25%;
  }
`;

export const SearchButton = styled(StyledBtn)`
  background: #ffa555;
  border-radius: 7px;
  border: none;
  border-top-left-radius: unset;
  border-bottom-left-radius: unset;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
