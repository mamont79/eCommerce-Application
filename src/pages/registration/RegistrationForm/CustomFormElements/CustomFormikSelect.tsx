import { Field } from 'formik';

export function CustomFormikSelect({
  defaultOption,
  name,
  // value,
  options,
}: {
  defaultOption: string;
  name: string;
  // value: string;
  options: JSX.Element[];
}) {
  return (
    <Field name={name} as="select">
      <option value="" hidden>
        {defaultOption}
      </option>
      {options}
    </Field>
  );
}
