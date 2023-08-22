import styled from 'styled-components';
import { StyledBtn } from '../styledBtn';

export const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: calc(100% - 500px);
  max-width: 45%;
`;

export const SearchInput = styled.input`
  margin-top: -5px;
  width: calc(100% - 50px);
  color: #cf844e;
  font-family: Arial;
  font-size: 16px;
  padding: 10px 20px;
  background: none;
  border-radius: 7px;
  border: 1px solid #c4c4c4;
  outline: 0;
  outline-offset: 0;

  &:invalid {
    border: solid 2px #e00000;
  }

  &::placeholder {
    color: #000000 25%;
  }
`;

export const SearchButton = styled(StyledBtn)`
  width: 140px;
  background: #ffa555;
  margin-top: -5px;
  margin-left: -10px;
  border-radius: 7px;
  border: none;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
