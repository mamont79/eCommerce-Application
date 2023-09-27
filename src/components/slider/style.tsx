import styled from 'styled-components';

const StyledSliderBtn = styled.button<{ $next?: boolean }>`
  position: absolute;
  top: 50%;
  right: ${({ $next }) => ($next ? '0' : 'auto')};
  opacity: 0.5;
  cursor: pointer;
  border: none;
  transition: all 1s;
  &:hover {
    opacity: 0.8;
  }
`;

const StyledSliderContainer = styled.div<{ $modal?: boolean }>`
  max-width: ${({ $modal }) => ($modal ? '700px' : '320px')};
  height: ${({ $modal }) => ($modal ? '650px' : '300px')};
  background: #ffffff;
  display: flex;
  position: relative;

  @media (max-width: 767px) {
    max-width: ${({ $modal }) => ($modal ? '400px' : '320px')};
    height: ${({ $modal }) => ($modal ? '350px' : '300px')};
  }
`;

const StyledSlider = styled.div<{ $modal?: boolean }>`
  width: ${({ $modal }) => ($modal ? '700px' : '320px')};
  height: ${({ $modal }) => ($modal ? '650px' : '300px')};
  overflow: hidden;

  @media (max-width: 767px) {
    max-width: ${({ $modal }) => ($modal ? '400px' : '320px')};
    height: ${({ $modal }) => ($modal ? '350px' : '300px')};
  }

  @media (max-width: 480px) {
    max-width: 320px;
    height: 320px;
  }
`;

const StyledSliderLine = styled.div`
  display: flex;
  position: relative;
  left: 0;
  transition: all ease 1s;
`;

const StyledSliderImgContainer = styled.div<{ $modal?: boolean }>`
  width: ${({ $modal }) => ($modal ? '700px' : '320px')};
  height: ${({ $modal }) => ($modal ? '650px' : '300px')};
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    max-width: ${({ $modal }) => ($modal ? '400px' : '320px')};
    height: ${({ $modal }) => ($modal ? '350px' : '300px')};
  }

  @media (max-width: 480px) {
    max-width: 320px;
    height: 320px;
  }
`;

const StyledSliderImg = styled.img<{ $modal?: boolean }>`
  height: ${({ $modal }) => ($modal ? '560px' : '256px')};
  max-width: ${({ $modal }) => ($modal ? '560px' : '256px')};
  margin: 0 auto;
  display: flex;

  @media (max-width: 767px) {
    max-width: ${({ $modal }) => ($modal ? '320px' : '256px')};
    height: ${({ $modal }) => ($modal ? '320px' : '256px')};
  }

  @media (max-width: 480px) {
    max-width: 320px;
    height: 320px;
  }

  @media (max-width: 480px) {
    max-width: 256px;
    height: 256px;
  }
`;

export {
  StyledSliderBtn,
  StyledSliderContainer,
  StyledSlider,
  StyledSliderLine,
  StyledSliderImgContainer,
  StyledSliderImg,
};
