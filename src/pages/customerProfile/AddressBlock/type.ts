import { IAddress } from '../../../types/customerTypes';

export type ICustomerEditFormFields = IAddress & {
  shippingAddress: boolean;
  billingAddress: boolean;
  defaultShipping: boolean;
  defaultBilling: boolean;
};

export type IOperationsWithAddress = {
  removeAddress: (id: string) => void;
  changeAddress: (updatedFields: ICustomerEditFormFields) => void;
};
