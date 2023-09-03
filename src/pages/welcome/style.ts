import styled from 'styled-components';

const StyledWelcomeWrapper = styled.div`
  display: block;
  width: 100%;
`;

const StyledWelcomeContainer = styled.div`
  padding: 1.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export {
  StyledWelcomeContainer,
  StyledWelcomeWrapper,
  StyledLinksWrapper,
  StyledCardsWrapper,
};
