import { StyledFormikInput } from '../../../../../components/StyledInput';
import StyledErrorMessage from '../../../../../components/errorMessage/styledErrorMessage';
import { getTextErrorMsg } from '../../../../registration/RegistrationForm/validators/getTextErrorMsg';
import { FormikValidatedFieldProps } from './types';

export function FirstNameValidatedField({
  errors,
  touched,
}: FormikValidatedFieldProps) {
  return (
    <div>
      <StyledFormikInput
        name="firstName"
        placeholder="First name"
        validate={getTextErrorMsg}
      />
      {errors.firstName && touched.firstName && (
        <StyledErrorMessage>{errors.firstName}</StyledErrorMessage>
      )}
    </div>
  );
}
