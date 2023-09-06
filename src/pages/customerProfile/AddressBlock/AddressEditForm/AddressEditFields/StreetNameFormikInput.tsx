import { getTextErrorMsg } from '../../../../registration/RegistrationForm/validators/getTextErrorMsg';
import StyledErrorMessage from '../../../../../components/errorMessage/styledErrorMessage';
import { StyledFormikInput } from '../../../../../components/StyledInput';
import { ICommonFormikInputProps } from './types';

export function StreetNameFormikInput({
  errors,
  touched,
}: ICommonFormikInputProps) {
  return (
    <div>
      <StyledFormikInput name="streetName" validate={getTextErrorMsg} />
      {touched.streetName && errors.streetName && (
        <StyledErrorMessage>{errors.streetName}</StyledErrorMessage>
      )}
    </div>
  );
}
