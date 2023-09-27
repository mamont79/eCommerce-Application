import styled from 'styled-components';
import Slider from '../../components/slider';

export const StyledProductPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 20px 10px;
`;

export const StyledImagesWrapper = styled.div`
  position: relative;
`;

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

export const StyledModalWindow = styled.div<{
  $modal?: boolean;
  $opened?: boolean;
}>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: #0000007c;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ $opened }) => ($opened ? 1 : 0)};
  visibility: ${({ $opened }) => ($opened ? 'visible' : 'hidden')};
`;

export const StyledModalArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const StyledModalContent = styled.div`
  min-height: 100%;
`;

export const StyledModalSlider = styled(Slider)`
  width: 50%;
  height: 50%;
`;

export const StyledModalZoom = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const StyledProductDescription = styled.p``;
