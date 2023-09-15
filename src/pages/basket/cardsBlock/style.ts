import styled from 'styled-components';

export const StyledCartCardsBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 0 auto;

  @media (max-width: 768px) {
    align-items: center;
  }
`;
