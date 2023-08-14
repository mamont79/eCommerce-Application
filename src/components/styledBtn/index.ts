import styled from 'styled-components';

const StyledBtn = styled.button<{ $primary?: boolean; $margin?: string }>`
  background: ${({ $primary }) => ($primary ? '#fc8600' : '#ffffff')};
  color: ${({ $primary }) => ($primary ? '#ffffff' : '#fc8600')};
  font-size: 1em;
  margin: ${({ $margin }) => (!$margin ? '0' : $margin)};
  padding: 0.25em 1em;
  border: solid #fc8600;
  border-radius: 3px;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    background: ${({ $primary }) => ($primary ? '#fc8600' : '#ffffff')};
    color: ${({ $primary }) => ($primary ? '#ffffff' : '#fc8600')};
  }
`;

const StyledCheckBtn = styled(StyledBtn)`
  color: #ff3a17;
  border-color: #ff3a17;
  background: #ffffff;
`;

export { StyledBtn, StyledCheckBtn };
