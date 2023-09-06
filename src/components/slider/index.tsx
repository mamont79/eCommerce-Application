/* eslint-disable react/no-array-index-key */
import { useRef } from 'react';
import { ImagesType } from '../../features/products/productsType';
import {
  StyledSliderBtn,
  StyledSlider,
  StyledSliderContainer,
  StyledSliderImg,
  StyledSliderImgContainer,
  StyledSliderLine,
} from './style';
import {
  switchPrevSliderImg,
  switchNextSliderImg,
} from './helper/changeSliderLineOffset';

export default function Slider({ allImages }: { allImages: ImagesType[] }) {
  const sliderLineRef = useRef<HTMLDivElement>(null);
  const currentimg = { current: 0 };
  return (
    <StyledSliderContainer>
      <StyledSlider>
        <StyledSliderLine ref={sliderLineRef}>
          {allImages.map(({ url }, index) => (
            <StyledSliderImgContainer key={index}>
              <StyledSliderImg src={url} alt="product" />
            </StyledSliderImgContainer>
          ))}
        </StyledSliderLine>
      </StyledSlider>
      <StyledSliderBtn
        onClick={switchPrevSliderImg(sliderLineRef, currentimg, allImages)}
      >
        ◁
      </StyledSliderBtn>
      <StyledSliderBtn
        $next
        onClick={switchNextSliderImg(sliderLineRef, currentimg, allImages)}
      >
        ▷
      </StyledSliderBtn>
    </StyledSliderContainer>
  );
}
