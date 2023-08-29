import { StyledFormikInput } from '../../../../../components/StyledInput';
import StyledErrorMessage from '../../../../../components/errorMessage/styledErrorMessage';
import { getTextErrorMsg } from '../../../../registration/RegistrationForm/validators/getTextErrorMsg';
import { FormikValidatedFieldProps } from './types';

export function LastNameValidatedField({
  errors,
  touched,
}: FormikValidatedFieldProps) {
  return (
    <div>
      <StyledFormikInput
        name="lastName"
        placeholder="Last name"
        validate={getTextErrorMsg}
      />
      {errors.lastName && touched.lastName && (
        <StyledErrorMessage>{errors.lastName}</StyledErrorMessage>
      )}
    </div>
  );
}
