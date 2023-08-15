import { useState } from 'react';
import StyledErrorSpan from '../../../../components/styledErrorSpan';
import { StyledInput } from '../../../../components/styledInput';
import getEmailHandler from './helpers/get-email-handler';
import { StyledInputContainer } from '../../RegistrationForm/style';

function ValidatedEmailInput() {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState('');

  const focusEmailHandler = () => {
    setEmailTouched(true);
  };

  const emailHandler = getEmailHandler(setEmail, setEmailError);

  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        placeholder="e-mail"
        name="email"
        value={email}
        onFocus={() => focusEmailHandler()}
        onChange={(e) => emailHandler(e)}
      />
      {emailTouched && emailError && (
        <StyledErrorSpan>{emailError} </StyledErrorSpan>
      )}
    </StyledInputContainer>
  );
}

export default ValidatedEmailInput;
