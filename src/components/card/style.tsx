import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledBtn } from '../styledBtn';

const StyledCardLink = styled(Link)`
  display: block;
`;

const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 250px;
  border-radius: 7px;
  text-align: center;
  font-family: arial;
  transition: 1s;
  margin: 20px 10px;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCardInfo = styled.div`
  padding: 10px 15px 15px 15px;
`;

const StyledCardImg = styled.img`
  border-radius: 7px;
  height: 250px;
  width: 250px;
`;

const StyledCardTitle = styled.h3`
  color: #9a501b;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  text-align: start;
  margin: 0;
`;

const StyledCardDiscription = styled.p`
  color: #cca78d;
  font-size: 14px;
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px 0 20px 0;
`;

const StyledCardSale = styled.div<{ $discount?: boolean }>`
  display: ${({ $discount }) => ($discount ? 'flex' : 'none')};
  justify-content: center;
  position: absolute;
  right: 0;
  width: 60px;
  height: 57px;
  border-radius: 40px 7px 40px 40px;
  background: #ff4d00;

  & p {
    color: #ffffff;
    text-align: center;
    margin: auto 0;
    font-size: 18px;
  }
`;

const StyledCardPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px 0;
`;

const StyledCardPrice = styled.h2`
  color: #9a501b;
  text-align: start;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const StyledCardDiscountPrice = styled.p`
  color: #c4c4c4;
  font-size: 16px;
  text-decoration: line-through;
  margin: 0;
  text-align: start;
`;

const StyledCardBtn = styled(StyledBtn)`
  margin: 5px 0 0;
  width: 100%;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    background: none;
    color: #fc86007b;
    border: solid #fc86007b;
    opacity: 0.7;
  }
`;

export {
  StyledCardLink,
  StyledCard,
  StyledCardInfo,
  StyledCardImg,
  StyledCardTitle,
  StyledCardDiscription,
  StyledCardSale,
  StyledCardPriceContainer,
  StyledCardPrice,
  StyledCardDiscountPrice,
  StyledCardBtn,
};
