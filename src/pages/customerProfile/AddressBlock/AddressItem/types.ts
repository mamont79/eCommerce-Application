import { IAddress } from '../../../../types/customerTypes';
import { IOperationsWithAddress } from '../type';

export type IAddressItemProps = {
  address: IAddress;
  isShipping?: boolean;
  isBilling?: boolean;
  isDefaultBilling?: boolean;
  isDefaultShipping?: boolean;
  operationsWithAddress: IOperationsWithAddress;
  showModal: (address: IAddress) => void;
};
