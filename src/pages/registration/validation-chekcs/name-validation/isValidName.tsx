import { useState } from 'react';
import StyledErrorSpan from '../../../../components/styledErrorSpan';
import { StyledInput } from '../../../../components/styledInput';
import getNameValidator from './helpers/getNameValidator';
import { StyledInputContainer } from '../../RegistrationForm/style';

function ValidatedRegistrationName({ placeholder }: { placeholder: string }) {
  const [name, setname] = useState('');
  const [nameTouched, setnameTouched] = useState(false);
  const [nameError, setNameError] = useState('');

  const focusNameHandler = () => {
    setnameTouched(true);
  };

  const nameHandler = getNameValidator(setname, setNameError);

  return (
    <StyledInputContainer>
      <StyledInput
        type="name"
        placeholder={placeholder}
        name="name"
        value={name}
        onFocus={() => focusNameHandler()}
        onChange={(e) => nameHandler(e)}
      />
      {nameTouched && nameError && (
        <StyledErrorSpan>{nameError}</StyledErrorSpan>
      )}
    </StyledInputContainer>
  );
}

export default ValidatedRegistrationName;
