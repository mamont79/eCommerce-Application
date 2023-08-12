import { ChangeEvent, useState } from 'react';

import StyledErrorSpan from '../../components/styledErrorSpan';
import { StyledInputContainer } from './style';
import {
  StyledInput,
  StyledPasswordInputWrapper,
} from '../../components/styledInput';

function ValidatedLoginEmail() {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState('');

  const blurEmailHandler = () => {
    setEmailTouched(true);
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const re =
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    const Spaces =
      e.target.value.toString().slice(0, 1) === ' ' ||
      e.target.value.toString().slice(-1) === ' ';

    setEmail(e.target.value);

    if (!re.test(String(e.target.value).toLowerCase()) || Spaces) {
      setEmailError(
        "email is invalid. Please check domain name, special symbols like '@', '.' or leading and trailing whitespace."
      );
      e.target.classList.add('invalid');
    } else {
      setEmailError('');
      e.target.classList.remove('invalid');
    }
  };

  return (
    <StyledInputContainer>
      <StyledInput
        $margin="20px 0 0 0"
        type="text"
        placeholder="e-mail"
        name="email"
        value={email}
        onBlur={() => blurEmailHandler()}
        onChange={(e) => emailHandler(e)}
      />
      {emailTouched && emailError && (
        <StyledErrorSpan>{emailError}</StyledErrorSpan>
      )}
    </StyledInputContainer>
  );
}

function ValidatedLoginPassword() {
  const [password, setPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordError, setPasswordError] = useState('Error password');

  const blurPasswordHandler = () => {
    setPasswordTouched(true);
  };

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const numberCheck = /(?=.*[0-9])/;
    const specialSymbolCheck = /(?=.*[!@#$%^&*])/;
    const upperCaseSymbolCheck = /(?=.*[A-Z])/;
    const lowerCaseSymbolCheck = /(?=.*[a-z])/;
    const symbolNumberCheck = /[0-9a-zA-Z!@#$%^&*]{6,}/;
    const Spaces =
      e.target.value.toString().slice(0, 1) === ' ' ||
      e.target.value.toString().slice(-1) === ' ';

    setPassword(e.target.value);
    e.target.classList.add('invalid');

    if (!lowerCaseSymbolCheck.test(String(e.target.value))) {
      setPasswordError(
        'Password must contain at least one lowercase letter (a-z).'
      );
    } else if (!upperCaseSymbolCheck.test(String(e.target.value))) {
      setPasswordError(
        'Password must contain at least one uppercase letter (A-Z).'
      );
    } else if (!numberCheck.test(String(e.target.value))) {
      setPasswordError('Password must contain at least one digit (0-9).');
    } else if (!specialSymbolCheck.test(String(e.target.value))) {
      setPasswordError(
        'Password must contain at least one special character (e.g., !@#$%^&*).'
      );
    } else if (!symbolNumberCheck.test(String(e.target.value))) {
      setPasswordError('Password must be at least 8 characters long.');
    } else if (Spaces) {
      setPasswordError(
        'Password must not contain leading or trailing whitespace.'
      );
    } else {
      setPasswordError('');
      e.target.classList.remove('invalid');
    }
  };

  return (
    <StyledInputContainer>
      <StyledPasswordInputWrapper>
        <StyledInput
          $margin="20px 0 0 0"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onBlur={() => blurPasswordHandler()}
          onChange={(e) => passwordHandler(e)}
        />
      </StyledPasswordInputWrapper>
      {passwordTouched && passwordError && (
        <StyledErrorSpan>{passwordError}</StyledErrorSpan>
      )}
    </StyledInputContainer>
  );
}

export { ValidatedLoginEmail, ValidatedLoginPassword };
