import styled from 'styled-components';

const StyledButton = styled.button<{ $primary?: boolean }>`
  background: ${($primary) => ($primary ? '#fc8600' : '#ffffff')};
  color: ${({ $primary }) => ($primary ? '#ffffff' : '#fc8600')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: solid #fc8600;
  border-radius: 3px;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    background: ${($primary) => ($primary ? '#ffffff' : '#fc8600')};
    color: ${({ $primary }) => ($primary ? '#ffffff' : '#fc8600')};
  }
`;

const StyledCheckButton = styled(StyledButton)`
  color: #ff3a17;
  border-color: #ff3a17;
  background: #ffffff;
`;

export { StyledButton, StyledCheckButton };
