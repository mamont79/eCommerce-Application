import styled from 'styled-components';

const StyledCatalogWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledCatalogFilterBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const StyledCategoryButtonWrapper = styled.div`
  width: 100%;
  height: 25px;
  margin: 10px 0;
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

export {
  StyledCatalogWrapper,
  StyledCatalogFilterBar,
  StyledCategoryButtonWrapper,
  StyledCardsWrapper,
};
