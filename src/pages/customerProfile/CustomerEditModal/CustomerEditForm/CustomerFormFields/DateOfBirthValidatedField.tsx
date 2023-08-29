import { StyledFormikInput } from '../../../../../components/StyledInput';
import StyledErrorMessage from '../../../../../components/errorMessage/styledErrorMessage';
import { getBirthDateErrorMsg } from '../../../../registration/RegistrationForm/validators/getBirthDateErrorMsg';
import { FormikValidatedFieldProps } from './types';

export function DateOfBirthValidatedField({
  errors,
  touched,
}: FormikValidatedFieldProps) {
  return (
    <div>
      <StyledFormikInput
        name="dateOfBirth"
        type="date"
        validate={getBirthDateErrorMsg}
      />
      {errors.dateOfBirth && touched.dateOfBirth && (
        <StyledErrorMessage>{errors.dateOfBirth}</StyledErrorMessage>
      )}
    </div>
  );
}
