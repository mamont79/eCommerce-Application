import { getTextErrorMsg } from '../../../../registration/RegistrationForm/validators/getTextErrorMsg';
import StyledErrorMessage from '../../../../../components/errorMessage/styledErrorMessage';
import { StyledFormikInput } from '../../../../../components/StyledInput';
import { ICommonFormikInputProps } from './types';

export function CityFormikInput({ errors, touched }: ICommonFormikInputProps) {
  return (
    <div>
      <StyledFormikInput name="city" validate={getTextErrorMsg} />
      {touched.city && errors.city && (
        <StyledErrorMessage>{errors.city}</StyledErrorMessage>
      )}
    </div>
  );
}
