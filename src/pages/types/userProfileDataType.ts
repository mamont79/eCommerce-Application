import { ICountriesData } from '../registration/RegistrationForm/CustomFormElements/constants';

export type ICustomerAddress = {
  id: string;
  country: keyof ICountriesData;
  city: string;
  postalCode: string;
  streetName: string;
};

export type ICustomerData = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  addresses: ICustomerAddress[];
  defaultShippingAddressId: string;
  defaultBillingAddressId: string;
  shippingAddressIds: [string];
  billingAddressIds: [string];
  isEmailVerified: boolean;
  authenticationMode: string;
};
