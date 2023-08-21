import { useState, ReactNode } from 'react';
import {
  StyledFormPasswordInputWrapper,
  StyledFormPasswordInputIcon,
  StyledFormikInput,
} from '../StyledInput';
import getPasswordErrorMsg from './validation/passwordValidator/getPasswordErrorMsg';

export function StyledPasswordInputWrapper({
  children,
  values,
}: {
  children: ReactNode;
  values: { password: string };
}) {
  const [isVisible, setVisibile] = useState<boolean>(false);
  const changePasswordVisibility = () => {
    setVisibile(!isVisible);
  };
  const passwortText = (
    <StyledFormikInput
      value={values.password}
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
