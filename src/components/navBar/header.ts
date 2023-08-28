import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWraperHeader = styled.header`
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

export const StyledFirstHeaderRow = styled.div`
  background: #ffe978;
  width: 100%;
`;

export const StyledSecondHeaderRow = styled.div`
  width: 100%;
`;

export const StyledContainerForUserControlsLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledMenuLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledMenuLinkLabel = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledBurgerDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 150px;
`;

export const StyledBurgerMenu = styled.div`
  position: relative;
  display: none;

  &:hover ${StyledBurgerDropdownContent} {
    display: block;
  }

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const StyledBurgerMenuLinks = styled(Link)`
  display: block;
  padding: 12px 20px;
  &:hover {
    color: #ffa555;
  }
`;

export const StyledTextLink = styled.p`
  display: table-cell;
  white-space: nowrap;
  line-height: 35px;
  font-weight: 400;
  font-size: 20px;
  color: #9a501b;
  margin: 0;
`;
