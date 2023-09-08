import { IAddressEditFormFields } from '../../../type';
import { ICommonFormikInputProps } from '../types';

export type IPostalCodeInputProps = ICommonFormikInputProps & {
  values: IAddressEditFormFields;
};
