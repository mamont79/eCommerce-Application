import { useState } from 'react';
import getCityValidator from './helpers/getStreetValidator';
import { StyledInputContainer } from '../../../RegistrationForm/style';
import { StyledInput } from '../../../../../components/styledInput';
import StyledErrorSpan from '../../../../../components/styledErrorSpan';

function ValidatedCityInput() {
  const [cityName, setCityName] = useState('');
  const [cityNameTouched, setCityNameInputTouched] = useState(false);
  const [cityNameError, setCityNameError] = useState('');

  const focusCityNameHandler = () => {
    setCityNameInputTouched(true);
  };

  const cityNameValidator = getCityValidator(setCityName, setCityNameError);

  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        placeholder="City"
        name="city"
        value={cityName}
        onFocus={() => focusCityNameHandler()}
        onChange={(e) => cityNameValidator(e)}
      />
      {cityNameTouched && cityNameError && (
        <StyledErrorSpan>{cityNameError} </StyledErrorSpan>
      )}
    </StyledInputContainer>
  );
}

export default ValidatedCityInput;
