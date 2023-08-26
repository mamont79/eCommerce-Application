import { ICountriesData } from './constants';

export type IRegistrationPageCheckboxProps = {
  label: string | JSX.Element;
  name: string;
  disabled?: boolean;
};

export type CustomerAddress = {
  country: keyof ICountriesData;
  city: string;
  postalCode: string;
  streetName: string;
};

export type NewCustomerPersonalData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  dateOfBirth: string;
};

export type NewCustomerAddressData = {
  addresses: CustomerAddress[];
  shippingAddresses: number[];
  billingAddresses: number[];
  defaultShippingAddress: number | null;
  defaultBillingAddress: number | null;
};

export type UserCreateRequestData = NewCustomerPersonalData &
  NewCustomerAddressData;
