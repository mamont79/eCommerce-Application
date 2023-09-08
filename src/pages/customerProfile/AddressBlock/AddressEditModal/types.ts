import { IAddress } from '../../../../types/customerTypes';
import {
  ICustomerNewAddressInitialData,
  IOperationsWithAddress,
} from '../type';

export type IAddressEditModalProps = {
  oldAddress: IAddress | ICustomerNewAddressInitialData;
  billingAddressIds: string[];
  shippingAddressIds: string[];
  defaultBillingAddressId?: string;
  defaultShippingAddressId?: string;
  cancelEdit: () => void;
  operationsWithAddress: IOperationsWithAddress;
};
