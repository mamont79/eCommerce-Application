import { Field } from 'formik';

export function CustomFromikCheckbox({
  label,
  name,
}: {
  label: string | JSX.Element;
  name: string;
}) {
  return (
    <div>
      <Field name={name} id={name} type="checkbox" />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}