import { ICountriesData } from '../../../types/countryTypes';

const registrationFormPersonalDataFields = {
  firstName: '',
  lastName: '',
  birthDate: '',
  email: '',
  password: '',
  userDataProcessingConsent: false,
};

const shippingAddressFields: ShippingAddressFields = {
  shippingCountry: '',
  shippingPostalCode: '',
  shippingCity: '',
  shippingStreet: '',
  isDefaultShippingAddress: false,
};

const billingAddressFields: BillingAddressFields = {
  billingCountry: '',
  billingPostalCode: '',
  billingCity: '',
  billingStreet: '',
  isDefaultBillingAddress: false,
};

export const registrationFormFields = {
  ...registrationFormPersonalDataFields,
  ...shippingAddressFields,
  ...billingAddressFields,
  billingSameAsShipping: true,
};

export type RegistrationFormFields = typeof registrationFormFields & {
  billingSameAsShipping: boolean;
};
export type ShippingAddressFields = {
  shippingCountry: keyof ICountriesData | '';
  shippingPostalCode: string;
  shippingCity: string;
  shippingStreet: string;
  isDefaultShippingAddress: boolean;
};
export type BillingAddressFields = {
  billingCountry: keyof ICountriesData | '';
  billingPostalCode: string;
  billingCity: string;
  billingStreet: string;
  isDefaultBillingAddress: boolean;
};
export type AddressFields = ShippingAddressFields & BillingAddressFields;
