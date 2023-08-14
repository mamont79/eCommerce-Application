import { StyledLoginForm } from './login-styles/style';
import ValidatedLoginEmail from './validation-chekcs/email-validation/isValidEmail';
import ValidatedLoginPassword from './validation-chekcs/password-validation/isValidPassword';
import LoginBtn from './login-styles/login-button';
import LogiLink from './login-styles/login-link';

export default function Login() {
  return (
    <StyledLoginForm action="submit">
      <h2>Glad to see you!</h2>
      <ValidatedLoginEmail />
      <ValidatedLoginPassword />
      <LogiLink to="1">Forgot your password?</LogiLink>
      <LoginBtn $primary>Log in</LoginBtn>
      <LogiLink to="/registration">
        Don&apos;t have an account yet? Singn up
      </LogiLink>
    </StyledLoginForm>
  );
}
