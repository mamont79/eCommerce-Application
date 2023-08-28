import { styled } from 'styled-components';

export const StyledLabelWrapper = styled.div<{ $default: boolean | undefined }>`
  width: fit-content;

  padding: 0 0.3rem;

  border: 2px solid ${({ $default }) => ($default ? 'gold' : 'lightblue')};
  border-radius: 5px;

  transform-origin: left;
  transform: rotate(-20deg);
`;
