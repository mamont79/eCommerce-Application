import { useState } from 'react';
import {
  StyledFormPasswordInputWrapper,
  StyledFormInput,
  StyledFormPasswordInputIcon,
} from '../styledInput';
import getPasswordErrorMsg from './validation/validationPassword';

export default function PasswordFormInput() {
  const [isVisible, setVisibile] = useState<boolean>(false);
  const changePasswordVisibility = () => {
    setVisibile(!isVisible);
  };

  return (
    <StyledFormPasswordInputWrapper>
      <StyledFormInput
        type={isVisible ? 'text' : 'password'}
        validate={getPasswordErrorMsg}
        placeholder="Password"
        name="password"
      />
      <StyledFormPasswordInputIcon
        visible={isVisible}
        onClick={changePasswordVisibility}
      />
    </StyledFormPasswordInputWrapper>
  );
}
