import styled from 'styled-components';

export const StyledCartProductTitle = styled.h3`
  color: #9a501b;
  margin-top: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-width: 150px;
`;

export const StyledCartText = styled.p`
  color: #9a501bbf;
  margin: 2px;
  max-width: 150px;
`;

export const StyledCartProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  @media (max-width: 480px) {
    max-width: 170px;
  }
`;
