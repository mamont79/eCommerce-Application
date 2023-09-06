import { IAddress } from '../../../../types/customerTypes';
import { IOperationsWithAddress } from '../type';

export type IAddressEditModalProps = {
  oldAddress: IAddress;
  isBilling?: boolean;
  isShipping?: boolean;
  isDefaultBilling?: boolean;
  isDefaultShipping?: boolean;
  cancelEdit: () => void;
  operationsWithAddress: IOperationsWithAddress;
};
