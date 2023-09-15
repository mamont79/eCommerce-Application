import styled from 'styled-components';

export const StyledPageContentWrapper = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

export const StyledCartContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
