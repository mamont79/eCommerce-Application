import { FormikErrors, FormikTouched } from 'formik';
import { IAddress } from '../../../../../types/customerTypes';

export type ICommonFormikInputProps = {
  errors: FormikErrors<IAddress>;
  touched: FormikTouched<IAddress>;
};
