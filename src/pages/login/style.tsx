import { Link } from 'react-router-dom';
import { Form } from 'formik';
import styled from 'styled-components';
import { StyledBtn } from '../../components/styledBtn';

const StyledLoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 75px 0 75px 35px;
  width: 40%;
  position: relative;
`;

const LoginBtn = styled(StyledBtn)`
  margin: 50px 0 0 0;
`;

const LoginLink = styled(Link)`
  margin: 20px 0 0 0;
`;

const LoginInputWrapper = styled.div`
  margin: 25px 0 0 0;
`;

export { StyledLoginForm, LoginBtn, LoginLink, LoginInputWrapper };
