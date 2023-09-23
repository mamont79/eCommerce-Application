import styled from 'styled-components';
import trashBinImg from '../../../../assets/cart-item-trash-bin.svg';

export const StyledCartCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff4ea;
  padding: 15px 15px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    max-width: 210px;
    align-items: center;
  }
`;

export const StyledImgWrapper = styled.div<{ $backgroundImgUrl?: string }>`
  background-image: url(${(props) => props.$backgroundImgUrl || ''});
  width: 170px;
  height: 150px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const StyledPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: end;
    margin-top: 10px;
  }
`;

export const StyledCardInfoWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex: 1 0 auto;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledDeleteCartItemBtn = styled.button`
  width: 20px;
  height: 23px;
  border: none;
  background-image: url('${trashBinImg}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: inherit;

  &:hover {
    cursor: pointer;
  }
`;
