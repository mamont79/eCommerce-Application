import styled from 'styled-components';

const StyledInput = styled.input<{ $margin?: string; $maxWidth?: string }>`
  background: none;
  color: #cf844e;
  font-family: Arial;
  font-size: 16px;
  padding: 10px 40px 10px 20px;
  border: 1px solid #c4c4c4;
  border-radius: 7px;
  margin: ${({ $margin }) => (!$margin ? '0' : $margin)};
  max-width: ${({ $maxWidth }) => (!$maxWidth ? '630px' : $maxWidth)};
  box-sizing: border-box;
  width: 100%;
  outline: 0;
  outline-offset: 0;

  &.invalid {
    border: solid 2px #e00000;
  }

  &::placeholder {
    color: #cf844e;
  }
`;

const StyledPasswordInputWrapper = styled.div`
  position: relative;
`;

const StyledPasswordInputIcon = styled.div`
  content: '';
  position: absolute;
  top: 40px;
  bottom: 0;
  right: 10px;
  margin: auto 0;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background: url('/src/assets/password-invisible.svg') no-repeat;

  &.visible {
    top: 30px;
    background: url('/src/assets/password-visible.svg') no-repeat;
  }
`;

export { StyledInput, StyledPasswordInputWrapper, StyledPasswordInputIcon };
