import { IAddress } from '../../../../../../types/customerTypes';
import { ICommonFormikInputProps } from '../types';

export type IPostalCodeInputProps = ICommonFormikInputProps & {
  values: IAddress;
};
