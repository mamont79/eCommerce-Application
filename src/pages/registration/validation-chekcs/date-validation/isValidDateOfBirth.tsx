import { useState } from 'react';
import StyledErrorSpan from '../../../../components/styledErrorSpan';
import { StyledInput } from '../../../../components/styledInput';
import getBirthDateValidator from './helpers/getBirthDateValidator';
import { StyledInputContainer } from '../../RegistrationForm/style';

function ValidatedBirthDateInput() {
  const [birthDate, setBirthDate] = useState('');
  const [birthDateTouched, setBirthDateTouched] = useState(false);
  const [birthDateError, setBirthDateError] = useState('');

  const emailHandler = getBirthDateValidator(setBirthDate, setBirthDateError);

  return (
    <StyledInputContainer>
      <StyledInput
        $maxWidth="170px"
        type="date"
        placeholder="Date of Birth"
        name="birthdate"
        value={birthDate}
        onFocus={() => setBirthDateTouched(true)}
        onChange={(e) => emailHandler(e)}
      />
      {birthDateTouched && birthDateError && (
        <StyledErrorSpan>{birthDateError} </StyledErrorSpan>
      )}
    </StyledInputContainer>
  );
}

export default ValidatedBirthDateInput;
