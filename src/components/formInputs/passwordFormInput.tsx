import {
  StyledFormPasswordInputWrapper,
  StyledFormInput,
  StyledFormPasswordInputIcon,
} from '../styledInput';
import changePasswordVisibility from './helpers/changePasswordVisibility';
import validationPassword from './validation/validationPassword';

export default function PasswordFormInput() {
  return (
    <StyledFormPasswordInputWrapper>
      <StyledFormInput
        type="password"
        validate={validationPassword}
        placeholder="Password"
        name="password"
      />
      <StyledFormPasswordInputIcon
        onClick={(e) => changePasswordVisibility(e)}
      />
    </StyledFormPasswordInputWrapper>
  );
}
