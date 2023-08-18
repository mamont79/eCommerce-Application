import { Field } from 'formik';
import { IValidator } from '../validators/types';

export function CustomFormikInput({
  name,
  disabled,
  type,
  placeholder,
  getValidationMsg,
}: {
  name: string;
  disabled?: boolean;
  type?: string;
  placeholder?: string;
  getValidationMsg: IValidator;
}) {
  return (
    <Field
      name={name}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      validate={getValidationMsg}
    />
  );
}

CustomFormikInput.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false,
};
