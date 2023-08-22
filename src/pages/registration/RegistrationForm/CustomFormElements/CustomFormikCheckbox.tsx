import { Field } from 'formik';
import { IRegistrationPageCheckboxProps } from './type';

export function RegistrationPageCheckbox({
  label,
  name,
}: IRegistrationPageCheckboxProps) {
  return (
    <div>
      <Field name={name} id={name} type="checkbox" />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
