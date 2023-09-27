import { StyledPhotoWrapper } from './style';

export function ImageWrapper({ photoRef }: { photoRef: string }) {
  return <StyledPhotoWrapper $photoRef={photoRef} />;
}
