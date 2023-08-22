import { ReactNode, useState } from 'react';
import getPasswordErrorMsg from './validation/passwordValidator/getPasswordErrorMsg';
import {
  StyledFormPasswordInputIcon,
  StyledFormPasswordInputWrapper,
  StyledFormikInput,
} from '../styledInput';

export function StyledPasswordInputWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [isVisible, setVisibile] = useState<boolean>(false);
  const changePasswordVisibility = () => {
    setVisibile(!isVisible);
  };
  const passwortText = (
    <StyledFormikInput
      name="password"
      type="text"
      placeholder="Password"
      validate={getPasswordErrorMsg}
    />
  );

  return (
    <StyledFormPasswordInputWrapper>
      {isVisible ? passwortText : children}
      <StyledFormPasswordInputIcon
        $visible={isVisible}
        onClick={changePasswordVisibility}
      />
    </StyledFormPasswordInputWrapper>
  );
}
