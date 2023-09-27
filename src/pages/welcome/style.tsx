import styled from 'styled-components';

const StyledWelcomeWrapper = styled.div`
  display: block;
  width: 100%;
`;

const StyledWelcomeContainer = styled.div`
  padding: 1.5rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const StyledMainSlogon = styled.h1`
  margin: 10px auto;
  text-align: center;
`;

const StyledDiscountCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 40px auto;
`;

const StyledDiscountCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 45%;
  min-width: 350px;
  min-height: 100px;
  margin-bottom: 20px;
  padding: 10px;
  background: linear-gradient(10deg, #fde402da 20%, #fcad0e9d 80%);
  border-radius: 10px;
`;

const StyledDiscontCode = styled.div`
  margin: 0 auto 0 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

const StyledDiscountAmount = styled.div`
  margin: 0 0 auto auto;
  font-size: 1.5rem;
  font-weight: 700;
`;
const StyledDiscountDescription = styled.div`
  margin: auto auto 0 0;
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  StyledWelcomeContainer,
  StyledWelcomeWrapper,
  StyledLinksWrapper,
  StyledMainSlogon,
  StyledDiscountCardsWrapper,
  StyledDiscountCard,
  StyledDiscontCode,
  StyledDiscountAmount,
  StyledDiscountDescription,
};
