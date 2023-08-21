import { Link } from 'react-router-dom';
import {
  StyledPageContentWrapper,
  StyledPageHeadingWrapper,
} from './style';
import { StyledPageName } from '../../components/StyledPageName';
import { RegistrationForm } from './RegistrationForm/CustomFormElements/RegistrationForm';

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
