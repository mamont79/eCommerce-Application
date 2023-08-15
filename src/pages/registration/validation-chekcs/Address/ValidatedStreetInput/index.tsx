import { useState } from 'react';
import getStreetNameValidator from './helpers/getStreetValidator';
import { StyledInputContainer } from '../../../RegistrationForm/style';
import { StyledInput } from '../../../../../components/styledInput';
import StyledErrorSpan from '../../../../../components/styledErrorSpan';

function ValidatedStreetNameInput() {
  const [streetName, setStreetName] = useState('');
  const [streetNameTouched, setStreetNameInputTouched] = useState(false);
  const [streetNameError, setStreetNameError] = useState('');

  const focusStreetNameHandler = () => {
    setStreetNameInputTouched(true);
  };

  const streetNameValidator = getStreetNameValidator(
    setStreetName,
    setStreetNameError
  );

  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        placeholder="Street"
        name="street"
        value={streetName}
        onFocus={() => focusStreetNameHandler()}
        onChange={(e) => streetNameValidator(e)}
      />
      {streetNameTouched && streetNameError && (
        <StyledErrorSpan>{streetNameError} </StyledErrorSpan>
      )}
    </StyledInputContainer>
  );
}

export default ValidatedStreetNameInput;
