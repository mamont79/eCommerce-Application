import { Field } from 'formik';
import { IValidator } from '../validators/types';

export function CustomFormikSelect({
  defaultOption,
  disabled,
  name,
  options,
  getValidationMsg,
}: {
  defaultOption: string;
  disabled?: boolean;
  name: string;
  options: JSX.Element[];
  getValidationMsg: IValidator;
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
};
