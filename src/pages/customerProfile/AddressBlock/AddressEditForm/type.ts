import { IAddress } from '../../../../types/customerTypes';
import {
  ICustomerNewAddressInitialData,
  IOperationsWithAddress,
} from '../type';

export type IAddressEditFormProps = {
  formId: string;
  oldAddress: IAddress | ICustomerNewAddressInitialData;
  isBilling?: boolean;
  isShipping?: boolean;
  isDefaultBilling?: boolean;
  isDefaultShipping?: boolean;
  operationsWithAddress: IOperationsWithAddress;
};
