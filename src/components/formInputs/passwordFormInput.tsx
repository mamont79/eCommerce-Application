import {
  StyledFormPasswordInputWrapper,
  StyledFormInput,
  StyledFormPasswordInputIcon,
} from '../styledInput';
import changePasswordVisibility from './helpers/changePasswordVisibility';
import getPasswordErrorMsg from './validation/validationPassword';

export default function PasswordFormInput() {
  return (
    <StyledFormPasswordInputWrapper>
      <StyledFormInput
        type="password"
        validate={getPasswordErrorMsg}
        placeholder="Password"
        name="password"
      />
      <StyledFormPasswordInputIcon
        onClick={(e) => changePasswordVisibility(e)}
      />
    </StyledFormPasswordInputWrapper>
  );
}
