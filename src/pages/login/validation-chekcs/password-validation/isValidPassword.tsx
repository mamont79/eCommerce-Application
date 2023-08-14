import { useState } from 'react';
import StyledErrorSpan from '../../../../components/styledErrorSpan';
import {
  StyledPasswordInputWrapper,
  StyledInput,
  StyledPasswordInputIcon,
} from '../../../../components/styledInput';
import { StyledInputContainer } from '../../login-styles/style';
import getPasswordHandler from './helpers/get-password-handler';
import changePasswordVisibility from './helpers/change-password-visibility';

function ValidatedLoginPassword() {
  const [password, setPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const focusPasswordHandler = () => {
    setPasswordTouched(true);
  };

  const passwordHandler = getPasswordHandler(setPassword, setPasswordError);

  return (
    <StyledInputContainer>
      <StyledPasswordInputWrapper>
        <StyledInput
          $margin="20px 0 0 0"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onFocus={() => focusPasswordHandler()}
          onChange={(e) => passwordHandler(e)}
        />
        <StyledPasswordInputIcon onClick={(e) => changePasswordVisibility(e)} />
      </StyledPasswordInputWrapper>
      {passwordTouched && passwordError && (
        <StyledErrorSpan>{passwordError}</StyledErrorSpan>
      )}
    </StyledInputContainer>
  );
}

export default ValidatedLoginPassword;
