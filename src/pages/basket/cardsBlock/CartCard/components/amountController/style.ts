import styled from 'styled-components';

export const StyledCountInput = styled.input`
  width: 30px;
  text-align: center;
  border: solid 2px #ffa555;
  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none; // Yeah, yeah everybody write about it
  }
`;

export const StyledCountButton = styled.button`
  border-radius: 50%;
  background-color: #ffffff;
  border: none;
  color: #9a501b;
  font-size: 18px;
  width: 25px;
  height: 25px;
`;

export const StyledCountWrapper = styled.div`
  display: flex;
  max-width: 100px;
  justify-content: space-between;
`;
