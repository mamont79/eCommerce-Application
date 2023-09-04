import StyledErrorMessage from '../../../../../../components/errorMessage/styledErrorMessage';
import { getPostalCodeValidator } from '../../../../../registration/RegistrationForm/validators/getPostalCodeErrorMsg';
import { StyledFormikInput } from '../../../../../../components/StyledInput';
import { type IPostalCodeInputProps } from './types';

export function PostalCodeFormikInput({
  errors,
  touched,
  values,
}: IPostalCodeInputProps) {
  const currentCountry = values.country;
  const currentValidator = getPostalCodeValidator(currentCountry);
  return (
    <div>
      <StyledFormikInput name="postalCode" validate={currentValidator} />
      {touched.postalCode && errors.postalCode && (
        <StyledErrorMessage>{errors.postalCode}</StyledErrorMessage>
      )}
    </div>
  );
}
