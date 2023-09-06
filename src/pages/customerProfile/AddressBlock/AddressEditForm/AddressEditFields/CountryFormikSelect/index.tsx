import { Field } from 'formik';
import { COUNTRIES_DATA } from '../../../../../../constants/countries';
import { getRequiredErrorMsg } from '../../../../../registration/RegistrationForm/validators/getRequiredErrorMsg';
import { SelectStyles } from './style';

export function CountryFormikSelect() {
  const options = (
    Object.keys(COUNTRIES_DATA) as Array<keyof typeof COUNTRIES_DATA>
  ).map((key) => (
    <option key={key} value={key}>
      {COUNTRIES_DATA[key].name}
    </option>
  ));
  return (
    <Field
      style={SelectStyles}
      as="select"
      name="country"
      validate={getRequiredErrorMsg}
    >
      {options}
    </Field>
  );
}
