/* eslint-disable no-param-reassign */
import { ImagesType } from '../../../features/products/productsType';
import { CurrentSliderimg } from './types';

export function switchPrevSliderImg(
  ref: React.RefObject<HTMLDivElement | null>,
  currentimg: CurrentSliderimg,
  allImages: ImagesType[],
  modal: boolean
): () => void {
  let length = 320;

  if (modal) {
    if (window.innerWidth > 480) {
      length = window.innerWidth < 768 ? 400 : 700;
    }
  }

  return () => {
    if (ref.current) {
      currentimg.current -= 1;

      if (currentimg.current < 0) {
        currentimg.current = allImages.length - 1;
      }

      ref.current.style.left = `-${currentimg.current * length}px`;
    }
  };
}

export function switchNextSliderImg(
  ref: React.RefObject<HTMLDivElement | null>,
  currentimg: CurrentSliderimg,
  allImages: ImagesType[],
  modal: boolean
): () => void {
  let length = 320;
  if (modal) {
    if (window.innerWidth > 480) {
      length = window.innerWidth < 768 ? 400 : 700;
    }
  }
  return () => {
    if (ref.current) {
      currentimg.current += 1;

      if (currentimg.current >= allImages.length) {
        currentimg.current = 0;
      }

      ref.current.style.left = `-${currentimg.current * length}px`;
    }
  };
}
