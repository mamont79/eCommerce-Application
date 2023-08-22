import { Link } from 'react-router-dom';
import { StyledPageName } from '../../components/StyledPageTitle';
import { RegistrationForm } from './RegistrationForm/CustomFormElements/RegistrationForm';
import { StyledPageContentWrapper, StyledPageHeadingWrapper } from './style';

export default function Registration() {
  return (
    <StyledPageContentWrapper>
      <StyledPageHeadingWrapper>
        <StyledPageName>Glad to see you!</StyledPageName>
        <Link to="/login">Already have an account? Login!</Link>
      </StyledPageHeadingWrapper>
      <RegistrationForm />
    </StyledPageContentWrapper>
  );
}
