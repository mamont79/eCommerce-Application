import styled from 'styled-components';

export const StyledpCartPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 480px) {
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
`;
