import { Field } from 'formik';
import { IRegistrationPageCheckboxProps } from './type';

export function RegistrationPageCheckbox({
  label,
  name,
  disabled,
  checked,
  handleClick,
}: IRegistrationPageCheckboxProps) {
  return (
    <div>
      <Field
        onClick={handleClick}
        checked={checked}
        disabled={disabled}
        name={name}
        id={name}
        type="checkbox"
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

RegistrationPageCheckbox.defaultValues = {
  disabled: false,
  checked: false,
  oncklick: null,
};
