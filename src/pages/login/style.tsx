import { Link } from 'react-router-dom';
import { Form } from 'formik';
import styled from 'styled-components';

const StyledLoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 40%;
  position: relative;
  flex-wrap: wrap;
  gap: 20px;
`;

const LoginLink = styled(Link)`
  margin: 20px 0 0 0;
`;

const LoginInputWrapper = styled.div`
  margin: 25px 0 0 0;
`;

export { StyledLoginForm, LoginLink, LoginInputWrapper };
