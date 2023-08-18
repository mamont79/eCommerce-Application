import { Link } from 'react-router-dom';
import {
  StyledH2,
  StyledPageContentWrapper,
  StyledPageHeadingWrapper,
} from './style';
import { RegistrationForm } from './RegistrationForm/CustomFormElements/RegistrationForm';

export default function Registration() {
  return (
    <StyledPageContentWrapper>
      <StyledPageHeadingWrapper>
        <StyledH2>Glad to see you!</StyledH2>
        <Link to="/login">Already have an account? Login!</Link>
      </StyledPageHeadingWrapper>
      <RegistrationForm />
    </StyledPageContentWrapper>
  );
}
