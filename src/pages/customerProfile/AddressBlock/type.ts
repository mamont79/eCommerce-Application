import { COUNTRIES_DATA } from '../../../constants/countries';
import { IAddress, IDraftAddress } from '../../../types/customerTypes';

export type IAddressEditFormFields = {
  id?: string;
  key?: string;
  country: keyof typeof COUNTRIES_DATA | '';
  postalCode: string;
  city: string;
  streetName: string;
  shippingAddress: boolean;
  billingAddress: boolean;
  defaultShipping: boolean;
  defaultBilling: boolean;
};

export type ICustomerNewAddressInitialData = Omit<IDraftAddress, 'country'> & {
  country: '' | keyof typeof COUNTRIES_DATA;
};

export type IOperationsWithAddress = {
  removeAddress: (id: string) => void;
  changeAddress: (updatedFields: IAddressEditFormFields) => void;
  addNewAddress: (newAddressData: IAddressEditFormFields) => void;
};

export type IEditedAddress = IAddress | ICustomerNewAddressInitialData | null;
