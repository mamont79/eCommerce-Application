import { IAddress } from '../../../../types/customerTypes';
import { IOperationsWithAddress } from '../type';

export type IAddressEditFormProps = {
  id: string;
  oldAddress: IAddress;
  isBilling?: boolean;
  isShipping?: boolean;
  isDefaultBilling?: boolean;
  isDefaultShipping?: boolean;
  operationsWithAddress: IOperationsWithAddress;
};
