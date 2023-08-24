import styled from 'styled-components';

export const StyledWraperHeader = styled.header`
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

export const StyledFirstHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: #ffe978;
`;

export const StyledSecondHeaderRow = styled.div`
  display: flex;
  padding: 1.5rem 2rem;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledContainerForUserControlsLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StyledTextLink = styled.p`
  display: table-cell;
  white-space: nowrap;
  line-height: 35px;
  font-weight: 400;
  font-size: 24px;
  color: #9a501b;
`;
