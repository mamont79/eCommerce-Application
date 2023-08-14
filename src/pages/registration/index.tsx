import { Link } from 'react-router-dom';
import { StyledWrapper, StyledHeading } from './style';
import RegistrationForm from './RegistrationForm';

export default function Registration() {
  return (
    <StyledWrapper>
      <StyledHeading>Glad to see you</StyledHeading>
      <Link to="/login">Already have an account? Login!</Link>
      <RegistrationForm />
    </StyledWrapper>
  );
}
