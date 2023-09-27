/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field } from 'formik';
import { IRegistrationPageCheckboxProps } from './type';

export function RegistrationPageCheckbox({
  label,
  name,
}: IRegistrationPageCheckboxProps) {
  return (
    <label>
      <Field name={name} type="checkbox" />
      {` ${label}`}
    </label>
  );
}

RegistrationPageCheckbox.defaultValues = {
  disabled: false,
};
