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

const StyledSliderContainer = styled.div`
  max-width: 320px;
  height: 300px;
  background: #ffffff;
  display: flex;
  position: relative;
`;

const StyledSlider = styled.div`
  width: 320px;
  height: 300px;
  overflow: hidden;
`;

const StyledSliderLine = styled.div`
  display: flex;
  position: relative;
  left: 0;
  transition: all ease 1s;
`;

const StyledSliderImgContainer = styled.div`
  width: 320px;
  height: 300px;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
`;

const StyledSliderImg = styled.img`
  height: 256px;
  max-width: 256px;
  margin: 0 auto;
  display: flex;
`;

export {
  StyledSliderBtn,
  StyledSliderContainer,
  StyledSlider,
  StyledSliderLine,
  StyledSliderImgContainer,
  StyledSliderImg,
};
