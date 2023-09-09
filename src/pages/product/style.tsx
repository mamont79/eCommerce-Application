import styled from 'styled-components';

export const StyledProductPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 20px 10px;
`;

export const StyledImagesWrapper = styled.div``;

export const StyledProductImage = styled.img`
  width: 100%;
`;

export const StyledMiniImages = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;

export const StyledMiniImg = styled.img`
  width: 25%;
  margin: 0 auto;
`;

export const StyledProductInfoWrapper = styled.div`
  width: 50%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledProductTitle = styled.h2`
  margin-top: 0;
`;

export const StyledCurrentPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 20px;
`;

export const StyledPreviousPrice = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-decoration: line-through;
  color: #c4c4c4;
  opacity: 0.9;
`;

export const StyledPriceInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledButtonWrapper = styled.div`
  width: 40%;
  min-width: 150px;
  margin: 30px auto 30px 0;
`;

export const StyledProductDescription = styled.p``;
