import { type FormikErrors, type FormikTouched } from 'formik';
import {
  type AddressFields,
  type RegistrationFormFields,
} from '../../formFields';

export type IRegistrationPageAddressBlockProps = {
  errors: FormikErrors<AddressFields>;
  touched: FormikTouched<AddressFields>;
  setFieldValue: (
    field: string,
    value: string | boolean,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<RegistrationFormFields>>;
  values: RegistrationFormFields;
};

export type IAddress = {
  errors: FormikErrors<AddressFields>;
  touched: FormikTouched<AddressFields>;
  values: RegistrationFormFields;
  setFieldValue: (
    field: string,
    value: string | boolean,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<RegistrationFormFields>>;
  billing?: boolean;
  isSame?: boolean;
};
