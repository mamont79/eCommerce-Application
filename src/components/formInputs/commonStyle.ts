import { Form } from 'formik';
import { styled } from 'styled-components';

export const StyledFormikForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FormGroup = styled.div`
  width: clamp(250px, 40vw, 630px);

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
