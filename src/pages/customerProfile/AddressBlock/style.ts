import { styled } from 'styled-components';
import { StyledBtn } from '../../../components/styledBtn';

export const StyledAddressBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledAddressList = styled.ul`
  display: flex;
  gap: 1rem;

  margin: 0;
  padding: 0;
`;

export const StyledAddressFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledAddAddressBtn = styled(StyledBtn)`
  width: fit-content;
`;
