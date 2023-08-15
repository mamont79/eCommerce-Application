import { StyledLoginForm } from './login-styles/style';
import ValidatedLoginEmail from './validation-chekcs/email-validation/isValidEmail';
import ValidatedLoginPassword from './validation-chekcs/password-validation/isValidPassword';
import LoginBtn from './login-styles/login-button';
import LoginLink from './login-styles/login-link';

export default function Login() {
  return (
    <StyledLoginForm action="submit">
      <h2>Glad to see you!</h2>
      <ValidatedLoginEmail />
      <ValidatedLoginPassword />
      <LoginLink to="1">Forgot your password?</LoginLink>
      <LoginBtn $primary>Log in</LoginBtn>
      <LoginLink to="/registration">
        Don&apos;t have an account yet? Singn up
      </LoginLink>
    </StyledLoginForm>
  );
}
