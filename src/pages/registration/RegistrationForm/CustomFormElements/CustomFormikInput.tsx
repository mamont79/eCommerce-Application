import { Field } from 'formik';
import { IValidator } from '../validators/types';

export function CustomFormikInput({
  name,
  type,
  placeholder,
  getValidationMsg,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  getValidationMsg: IValidator;
}) {
  return (
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      validate={getValidationMsg}
    />
  );
}

CustomFormikInput.defaultProps = {
  type: 'text',
  placeholder: '',
};
