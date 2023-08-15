import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';

export default function Login() {
  return (
    <div>
      <h2>Glad to see you!</h2>
      <Link to="/login">Alreade have an account? Login!</Link>
      <RegistrationForm />
    </div>
  );
}
