/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { ImagesType } from '../../../features/products/productsType';
import { CurrentSliderimg } from './types';

export function switchPrevSliderImg(
  ref: React.RefObject<HTMLDivElement | null>,
  currentimg: CurrentSliderimg,
  allImages: ImagesType[]
): () => void {
  return () => {
    if (ref.current) {
      currentimg.current--;

      if (currentimg.current < 0) {
        currentimg.current = allImages.length - 1;
      }

      ref.current.style.left = `-${currentimg.current * 320}px`;
    }
  };
}

export function switchNextSliderImg(
  ref: React.RefObject<HTMLDivElement | null>,
  currentimg: CurrentSliderimg,
  allImages: ImagesType[]
): () => void {
  return () => {
    if (ref.current) {
      currentimg.current++;

      if (currentimg.current >= allImages.length) {
        currentimg.current = 0;
      }

      ref.current.style.left = `-${currentimg.current * 320}px`;
    }
  };
}
