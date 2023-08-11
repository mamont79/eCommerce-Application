import { StyledWrapper, StyledHeading, StyledLink } from './style';
import RegistrationForm from './RegistrationForm';

export default function Registration() {
  return (
    <StyledWrapper>
      <StyledHeading>Glad to see you</StyledHeading>
      <StyledLink href="1">Already have an account? Login!</StyledLink>
      <RegistrationForm />
    </StyledWrapper>
  );
}
