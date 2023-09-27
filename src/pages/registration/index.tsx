import {
  RegistrationLink,
  StyledPageName,
} from '../../components/StyledPageTitle';
import { RegistrationForm } from './RegistrationForm';
import { StyledPageContentWrapper, StyledPageHeadingWrapper } from './style';

export default function Registration() {
  return (
    <StyledPageContentWrapper>
      <StyledPageHeadingWrapper>
        <StyledPageName>Glad to see you!</StyledPageName>
        <RegistrationLink to="/login">
          Already have an account? Login!
        </RegistrationLink>
      </StyledPageHeadingWrapper>
      <RegistrationForm />
    </StyledPageContentWrapper>
  );
}
