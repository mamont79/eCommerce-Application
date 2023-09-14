import styled from 'styled-components';
import trashBinImg from '../../../../assets/cart-item-trash-bin.svg';

export const StyledCartCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledImgWrapper = styled.div`
  width: 170px;
  height: 150px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const StyledDeleteCartItemBtn = styled.button`
  width: 20px;
  height: 23px;

  border: none;

  background-image: url('${trashBinImg}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  &:hover {
    cursor: pointer;
  }
`;
