import { styled } from 'styled-components';

export const StyledAddressLabel = styled.div<{ $default?: boolean }>`
  width: fit-content;

  padding: 0 0.5rem;

  background-color: ${({ $default }) => ($default ? 'goldenrod' : 'lightblue')};

  border: 2px solid black;
`;
