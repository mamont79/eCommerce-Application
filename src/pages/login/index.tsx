import { Link } from 'react-router-dom';
import { StyledBtn } from '../../components/styledBtn';
import { StyledLoginForm } from './style';
import ValidatedLoginEmail from './validation-chekcs/email-validation/isValidEmail';
import ValidatedLoginPassword from './validation-chekcs/password-validation/isValidPassword';

export default function Login() {
  return (
    <StyledLoginForm action="submit">
      <h2>Glad to see you!</h2>
      <ValidatedLoginEmail />
      <ValidatedLoginPassword />
      <a href="1">Forgot your password?</a>
      <StyledBtn $primary $margin="50px 0 0 0">
        Log in
      </StyledBtn>
      <Link to="/registration">Don&apos;t have an account yet? Singn up</Link>{' '}
      {/* // сделаем контейнер */}
    </StyledLoginForm>
  );
}
