import { styled } from 'styled-components';

export const StyledAddressListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const StyledLabelsWrapper = styled.div`
  position: absolute;
  left: 110%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledAddressListItem = styled.li`
  position: relative;

  width: 100%;
  max-width: 200px;

  padding: 0 0.5rem;

  border: 2px solid #c1c1c1;
  border-radius: 5px;
`;
