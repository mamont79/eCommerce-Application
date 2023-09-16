import styled from 'styled-components';

export const StyledPageContentWrapper = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

export const StyledEmptyCartContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #fff4ea;
  padding: 15px 15px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 210px;
  }
`;

export const StyledCartContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
