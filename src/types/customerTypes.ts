import { COUNTRIES_DATA } from '../constants/countries';

export type IDraftAddress = {
  country: keyof typeof COUNTRIES_DATA;
  postalCode: string;
  city: string;
  streetName: string;
};

export type IAddress = {
  id: string;
  country: keyof typeof COUNTRIES_DATA;
  postalCode: string;
  city: string;
  streetName: string;
};

export type ICustomerDraft = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  addresses: IDraftAddress[];
  defaultShippingAddress?: number;
  defaultBillingAddress?: number;
  shippingAddresses: number[];
  billingAddresses: number[];
};

export type ICustomer = {
  id: string;
  version: number;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  addresses: IAddress[];
  shippingAddressIds: string[];
  billingAddressIds: string[];
  defaultShippingAddressId: string;
  defaultBillingAddressId: string;
};
