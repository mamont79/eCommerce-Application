import { FormikErrors, FormikTouched } from 'formik';

export type IEditFormFields = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
};

export type FormikValidatedFieldProps = {
  errors: FormikErrors<IEditFormFields>;
  touched: FormikTouched<IEditFormFields>;
};
