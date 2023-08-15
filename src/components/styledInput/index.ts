import styled from 'styled-components';

const StyledInput = styled.input<{ $margin?: string; $maxWidth?: string }>`
  background: none;
  color: #cf844e;
  font-family: Arial;
  font-size: 16px;
  padding: 10px 20px;
  border: 1px solid #c4c4c4;
  border-radius: 7px;
  margin: ${({ $margin }) => (!$margin ? '0' : $margin)};
  max-width: ${({ $maxWidth }) => (!$maxWidth ? '630px' : $maxWidth)};
  width: auto;
  outline: 0;
  outline-offset: 0;


  &:invalid {
    border: solid 2px #e00000;
  }

  &::placeholder {
    color: #cf844e;
  }
`;

export default StyledInput;
