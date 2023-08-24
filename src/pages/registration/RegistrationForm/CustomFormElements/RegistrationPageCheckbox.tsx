/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field } from 'formik';
import { IRegistrationPageCheckboxProps } from './type';

export function RegistrationPageCheckbox({
  label,
  name,
  disabled,
}: IRegistrationPageCheckboxProps) {
  return (
    <label>
      <Field disabled={disabled} name={name} type="checkbox" />
      {` ${label}`}
    </label>
  );
}

RegistrationPageCheckbox.defaultValues = {
  disabled: false,
};
