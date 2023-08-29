import { useState } from 'react';
import getPasswordErrorMsg from './validation/passwordValidator/getPasswordErrorMsg';
import {
  StyledFormPasswordInputIcon,
  StyledFormPasswordInputWrapper,
  StyledFormikInput,
} from '../styledInput';

export function StyledPasswordInputWrapper() {
  const [isVisible, setVisibile] = useState<boolean>(false);

  const changePasswordVisibility = () => {
    setVisibile(!isVisible);
  };

  return (
    <StyledFormPasswordInputWrapper>
      <StyledFormikInput
        name="password"
        type={isVisible ? 'text' : 'password'}
        placeholder="Password"
        validate={getPasswordErrorMsg}
      />
      <StyledFormPasswordInputIcon
        $visible={isVisible}
        onClick={changePasswordVisibility}
      />
    </StyledFormPasswordInputWrapper>
  );
}
