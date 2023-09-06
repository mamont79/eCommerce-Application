import { styled } from 'styled-components';

export const StyledAddressItemWrapper = styled.li`
  width: 100%;
  max-width: 400px;

  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: 1rem;

  background-color: #fee4cf;

  border: 2px solid #c1c1c1;
  border-radius: 10px;
`;

export const StyledAddressItemLabelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  width: 100%;
`;
