import styled from 'styled-components';

export const StyledPhotoWrapper = styled.div<{ $photoRef: string }>`
  width: 250px;
  height: 250px;

  border: 2px solid #c1c1c1;
  border-radius: 5px;

  background-image: ${({ $photoRef }) => $photoRef};
  background-color: #000000;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
