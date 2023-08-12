import { Link } from 'react-router-dom';
import { StyledBtn } from '../../components/styledBtn';
import { StyledLoginForm } from './style';
import {
  ValidatedLoginEmail,
  ValidatedLoginPassword,
} from './validation_login';

export default function Login() {
  return (
    <StyledLoginForm action="submit">
      <h2>Glad to see you!</h2>
      <ValidatedLoginEmail />
      <ValidatedLoginPassword />
      <a href="1">Forgot your password?</a>
      <StyledBtn $primary>Log in</StyledBtn>
      <Link to="/registration">Don&apos;t have an account yet? Singn up</Link>
    </StyledLoginForm>
  );
}
