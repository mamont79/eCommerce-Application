import { Field } from 'formik';
import { COUNTRIES_DATA } from '../../../../../../constants/countries';
import { getRequiredErrorMsg } from '../../../../../registration/RegistrationForm/validators/getRequiredErrorMsg';
import { SelectStyles } from './style';
import { ICommonFormikInputProps } from '../types';
import StyledErrorMessage from '../../../../../../components/errorMessage/styledErrorMessage';

export function CountryFormikSelect({
  errors,
  touched,
}: ICommonFormikInputProps) {
  const options = (
    Object.keys(COUNTRIES_DATA) as Array<keyof typeof COUNTRIES_DATA>
  ).map((key) => (
    <option key={key} value={key}>
      {COUNTRIES_DATA[key].name}
    </option>
  ));
  return (
    <div>
      <Field
        style={SelectStyles}
        as="select"
        name="country"
        validate={getRequiredErrorMsg}
      >
        <option value="" hidden>
          Choose country
        </option>
        {options}
      </Field>
      {touched.country && errors.country && (
        <StyledErrorMessage>{errors.country}</StyledErrorMessage>
      )}
    </div>
  );
}
