import { StyledBtn } from '../../components/styledBtn';
import StyledInput from '../../components/styledInput';
import StyledLoginForm from './style';

export default function Login() {
  return (
    <StyledLoginForm action="submit">
      <h2>Glad to see you!</h2>
      <StyledInput
        $margin="20px 0 0 0"
        type="email"
        placeholder="e-mail"
        name="email"
        id="login-email"
        className="form-input"
      />
      <StyledInput
        $margin="20px 0 0 0"
        type="password"
        placeholder="Password"
        name="password"
        id="login-password"
      />
      <a href="1">Forgot your password?</a>
      <StyledBtn $primary>Log in</StyledBtn>
      <a href="1">Don&apos;t have an account yet? Singn up</a>
    </StyledLoginForm>
  );
}
