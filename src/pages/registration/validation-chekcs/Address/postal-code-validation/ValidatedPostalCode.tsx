import { useState } from 'react';
import { StyledInputContainer } from '../../../RegistrationForm/style';
import { StyledInput } from '../../../../../components/styledInput';
import StyledErrorSpan from '../../../../../components/styledErrorSpan';
import getPostalCodeValidator from './helpers/getPostalCodeValidator';
import COUNTRY from '../country-postalcode-map';

function ValidatedPostalCodeInput({
  chosenCountry,
}: {
  chosenCountry: keyof typeof COUNTRY | '';
}) {
  const [postalCode, setPostalCode] = useState('');
  const [postalCodeTouched, setPostalCodeTouched] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState('');

  const onFocusPostalCode = () => {
    setPostalCodeTouched(true);
  };

  const postalCodeValidator = getPostalCodeValidator(
    setPostalCode,
    setPostalCodeError,
    chosenCountry ? COUNTRY[chosenCountry] : ''
  );

  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        placeholder="Postal Code"
        name="postalcode"
        value={postalCode}
        onFocus={() => onFocusPostalCode()}
        onChange={(e) => postalCodeValidator(e)}
      />
      {postalCodeTouched && postalCodeError && (
        <StyledErrorSpan>{postalCodeError} </StyledErrorSpan>
      )}
    </StyledInputContainer>
  );
}

export default ValidatedPostalCodeInput;
