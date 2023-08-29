import { Form } from 'formik';
import { styled } from 'styled-components';

export const StyledFormikCustomerEditForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledBtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
`;
