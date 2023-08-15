import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import { StyledPageContentWrapper, StyledPageHeadingWrapper } from './style';

export default function Registration() {
  return (
    <StyledPageContentWrapper>
      <StyledPageHeadingWrapper>
        <h2 style={{ margin: '0' }}>Glad to see you!</h2>
        <Link to="/login">Already have an account? Login!</Link>
      </StyledPageHeadingWrapper>
      <RegistrationForm />
    </StyledPageContentWrapper>
  );
}
