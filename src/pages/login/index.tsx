import { Formik } from 'formik';
import {
  LoginBtn,
  LoginInputWrapper,
  LoginLink,
  StyledLoginForm,
} from './style';
import EmailFormInput from '../../components/formInputs/emailFormInput';
import PasswordFormInput from '../../components/formInputs/passwordFormInput';
import StyledErrorMessage from '../../components/errorMessage/styledErrorMessage';

export default function Login() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        // eslint-disable-next-line no-console
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <StyledLoginForm>
          <h2>Glad to see you!</h2>
          <EmailFormInput />
          {errors.email && touched.email && (
            <StyledErrorMessage>{errors.email}</StyledErrorMessage>
          )}
          <LoginInputWrapper>
            <PasswordFormInput />
          </LoginInputWrapper>
          {errors.password && touched.password && (
            <StyledErrorMessage>{errors.password}</StyledErrorMessage>
          )}
          <LoginLink to="1">Forgot your password?</LoginLink>
          <LoginBtn primary type="submit">
            Log in
          </LoginBtn>
          <LoginLink to="/registration">
            Don&apos;t have an account yet? Sign up
          </LoginLink>
        </StyledLoginForm>
      )}
    </Formik>
  );
}
