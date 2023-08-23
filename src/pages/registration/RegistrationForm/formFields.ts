import { CountriesData } from './CustomFormElements/constants';

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
};

export type RegistrationFormFields = typeof registrationFormFields;
export type ShippingAddressFields = {
  shippingCountry: keyof CountriesData | '';
  shippingPostalCode: string;
  shippingCity: string;
  shippingStreet: string;
  isDefaultShippingAddress: boolean;
};
export type BillingAddressFields = {
  billingCountry: keyof CountriesData | '';
  billingPostalCode: string;
  billingCity: string;
  billingStreet: string;
  isDefaultBillingAddress: boolean;
};
export type AddressFields = ShippingAddressFields & BillingAddressFields;
