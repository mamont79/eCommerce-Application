import { useRef } from 'react';
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
import { ISliderData } from '../../pages/product/types';

export default function Slider({ allImages, modal = false }: ISliderData) {
  const sliderLineRef = useRef<HTMLDivElement>(null);
  const currentimg = { current: 0 };
  return (
    <StyledSliderContainer $modal={modal}>
      <StyledSlider $modal={modal}>
        <StyledSliderLine ref={sliderLineRef}>
          {allImages.map(({ url }) => (
            <StyledSliderImgContainer key={url} $modal={modal}>
              <StyledSliderImg src={url} alt="product" $modal={modal} />
            </StyledSliderImgContainer>
          ))}
        </StyledSliderLine>
      </StyledSlider>
      <StyledSliderBtn
        onClick={switchPrevSliderImg(
          sliderLineRef,
          currentimg,
          allImages,
          modal
        )}
      >
        ◁
      </StyledSliderBtn>
      <StyledSliderBtn
        $next
        onClick={switchNextSliderImg(
          sliderLineRef,
          currentimg,
          allImages,
          modal
        )}
      >
        ▷
      </StyledSliderBtn>
    </StyledSliderContainer>
  );
}
