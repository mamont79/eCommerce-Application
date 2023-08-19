import { Field } from 'formik';
import { IValidator } from '../validators/types';

export function CustomFormikSelect({
  defaultOption,
  name,
  options,
  getValidationMsg,
  disabled,
}: {
  disabled?: boolean;
  defaultOption: string;
  name: string;
  options: JSX.Element[];
  getValidationMsg?: IValidator;
}) {
  return (
    <Field
      disabled={disabled}
      name={name}
      as="select"
      validate={getValidationMsg}
    >
      <option value="" hidden>
        {defaultOption}
      </option>
      {options}
    </Field>
  );
}

CustomFormikSelect.defaultProps = {
  disabled: false,
  getValidationMsg: null,
};
