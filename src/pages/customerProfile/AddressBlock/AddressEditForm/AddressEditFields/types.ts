import { FormikErrors, FormikTouched } from 'formik';
import { IAddressEditFormFields } from '../../type';

export type ICommonFormikInputProps = {
  errors: FormikErrors<IAddressEditFormFields>;
  touched: FormikTouched<IAddressEditFormFields>;
};
