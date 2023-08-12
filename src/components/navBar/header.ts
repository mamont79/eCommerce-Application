import styled from 'styled-components';

export const StyledWraperHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 165px;
  background: #ffffff;
`;

export const StyledFirstHeaderRow = styled.div`
  display: flex;
  vertical-align: middle;
  width: 100%;
  height: 83px;
  background: #ffe978;
`;

export const StyledSecondHeaderRow = styled.div`
  display: flex;
  vertical-align: bottom;
  width: 100%;
  height: 82px;
`;

export const StyledControls = styled.div`
  display: flex;
  column-gap: 30px;
  vertical-align: bottom;
  width: calc(100% - 80px);
  height: 35px;
  margin: auto auto 0 36px;
`;

export const StyledTextLink = styled.p`
  display: table-cell;
  white-space: nowrap;
  line-height: 35px;
  font-weight: 400;
  font-size: 24px;
  color: #9a501b;
`;
